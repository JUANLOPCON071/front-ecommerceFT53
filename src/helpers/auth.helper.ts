import { IRegisterProps } from "@/components/interfaces/Register";
import { ILoginProps } from "@/components/interfaces/Types";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json()
        } else {
            Swal.fire({
                title: 'Register failed!',
                text: 'Please try register again',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            throw Error("Failed to register")
        }
    } catch (error: any) {
        throw new Error(error)
        
    }
    
};
export async function login(userData: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json()
        } else {
            throw Error("Failed to login")
        }
    } catch (error: any) {
        throw new Error(error)
        
    }
    
};