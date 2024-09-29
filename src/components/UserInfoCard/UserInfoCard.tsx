"use client"
import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import { userSessionProps } from '../interfaces/Types';
import { useRouter } from 'next/navigation';

const UserInfoCard = () => {
    const router = useRouter()
    const {userData} = useAuth();

    useEffect(() => {
        if(!userData) {
            router.push("/home")
        } 
    })
  return (
    <div>
        <h1>Imformacion de cuenta</h1>
        <div>
            <p>Nombre: {userData?.userData.name}</p>
            <p>E-mail: {userData?.userData.email}</p>
            <p>Direccion: {userData?.userData.address}</p>
            <p>telefono: {userData?.userData.phone}</p>
        </div>
    </div>
  )
}

export default UserInfoCard