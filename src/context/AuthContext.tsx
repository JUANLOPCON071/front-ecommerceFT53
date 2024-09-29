"use client"
import { userSessionProps } from "@/components/interfaces/Types"
import { useState, useEffect, createContext, useContext } from "react"

export interface AuthContextProps {
    userData: userSessionProps | null;
    setUserData: (userData: userSessionProps | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => {}
})

export interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<userSessionProps | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=> { // se ejecuta cuando hagamos el login
        if(userData) {
            localStorage.setItem("userSession", JSON.stringify({token: userData.token, userData: userData.userData}))
        }
    }, [userData])

    useEffect(()=> {
        const storedUserData = localStorage.getItem("userSession")
        if (storedUserData){
            setUserData(JSON.parse(storedUserData!))
        }
        setLoading(false)
      }, [])

  return (
    <AuthContext.Provider value={{userData, setUserData}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
