"use client"
import React, { useEffect, useState } from 'react'
import { IRegisterError, IRegisterProps } from '../interfaces/Register'
import Link from 'next/link'
import { validateRegisterForm } from '@/helpers/validate'
import { register } from '@/helpers/auth.helper'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';
import { useAuth } from '@/context/AuthContext'

const RegisterForm = () => {
    const router = useRouter();
    const { userData, setUserData } = useAuth()
    const initialState = {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    }
    const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
    const [errors, setErrors] = useState<IRegisterError>(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
            ...dataUser,
            [name]:value
        })
    }

    const handleSubmin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!dataUser.name || !dataUser.email || !dataUser.password || !dataUser.address || !dataUser.phone) return alert("Existen campos sin llenar")

        await register(dataUser)
        Swal.fire({
            title: '¡Welcome!',
            text: 'You have successfully registered your account.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        router.push("/login")
    }

    useEffect(() => {
        if(userData){
          router.push("/home")
        }
      })

    useEffect(() => {
        const errors = validateRegisterForm(dataUser)
        setErrors(errors)
    }, [dataUser])

  return (
    <div className="flex flex-row items-center pr-6 pl-6 relative">
        <div className="w-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-5 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            REGISTER
                            </h1>
                            <form onSubmit={handleSubmin} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Name</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        // id="name" 
                                        name="name" 
                                        type="text"
                                        value={dataUser.name}
                                        onChange={handleChange} 
                                        placeholder="Full Name" 
                                    />
                                    {
                                        errors.name && <span>{errors.name}</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        id="email-address" 
                                        name="email" 
                                        type="email"
                                        value={dataUser.email}
                                        onChange={handleChange} 
                                        placeholder="name@company.com" 
                                    />
                                    {
                                        errors.email && <span>{errors.email}</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        id="password" 
                                        name="password" 
                                        type="password"
                                        value={dataUser.password}
                                        onChange={handleChange} 
                                        placeholder="••••••••" 
                                    />
                                    {
                                        errors.password && <span>{errors.password}</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Address</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        id="address" 
                                        name="address" 
                                        type="text"
                                        value={dataUser.address}
                                        onChange={handleChange} 
                                        placeholder="address" 
                                    />
                                    {
                                        errors.address && <span>{errors.address}</span>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Phone</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        id="phone-number" 
                                        name="phone" 
                                        type="number"
                                        value={dataUser.phone}
                                        onChange={handleChange} 
                                        placeholder="phone number" 
                                    />
                                    {
                                        errors.phone && <span>{errors.phone}</span>
                                    }
                                </div>
                                <button disabled={errors.email ? true : false} type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center">Sign in</button>
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                    <p className="text-xs mx-4 mb-0 text-center font-semibold dark:text-white">Create account with</p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className="px-6 sm:px-0">
                                        <button type="button" className="text-white w-6/7 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
                                    </div>
                                    <div>
                                        <button type="button" className="text-white w-6/7 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>Sign in with Facebook
                                    </button>
                                    </div>
                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                      Do you have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                                </p>
                            </form>
                          </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default RegisterForm