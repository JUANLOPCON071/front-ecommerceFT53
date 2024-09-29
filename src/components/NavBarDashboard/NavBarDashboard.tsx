'use client'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export const NavBarDashboard = () => {
  const router = useRouter()
  const {userData, setUserData} = useAuth();

  useEffect(() => {
    if(!userData){
      router.push("/home")
    }
  },[userData])
  return (
    <nav>
        <ul className="flex">
          <Link className='text-white text-base p-2 font-semibold opacity-70 hover:opacity-100' href="/dashboard/userinfo"><li>Mi cuenta</li></Link>
          <Link className='text-white text-base p-2 font-semibold opacity-70 hover:opacity-100' href="/dashboard/orders"><li>Mis pedidos</li></Link>
          <Link className='text-white text-base p-2 font-semibold opacity-70 hover:opacity-100' href="/dashboard/cart"><li>Carrito de compras</li></Link>
        </ul>
      </nav>
  )
}

export default NavBarDashboard;
