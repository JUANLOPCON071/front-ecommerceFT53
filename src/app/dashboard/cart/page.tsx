"use client"
import CartPage from "@/components/CartPage/CartPage";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Cart = () => {
  const router = useRouter()
  const {userData} = useAuth()
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userSession");
    if (storedUserData) {
      setUserInfo(JSON.parse(storedUserData));
    }
    setLoading(false); // Terminamos de cargar el estado
  }, [userData]);

  useEffect(() => {
    if(userInfo === null && !loading){
      router.push("/home")
    } else if (userInfo !== null){
      setLoading(false)
    }
  },[userInfo, loading,router])

  if(loading){
    return <p>Loading...</p>;
  }

  return (
    <div>
      <CartPage/>
    </div>
  )
}
export default Cart;