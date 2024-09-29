"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import IProduct from '../interfaces/Product';
import ProductCart from '../ProductCart/ProductCart';
import Link from 'next/link';
import { createOrder } from '@/helpers/orders.helper';
import { useAuth } from '@/context/AuthContext';
import Swal from 'sweetalert2';


const CartPage = () => {
    const router = useRouter()
    const {userData} = useAuth();
    const [cart, setCart] = useState<IProduct[]>([])
    const [totalCart, setTotalCart] = useState<number>(0)
    

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
      }, []);

    const handleRemove = (id: number, name: string) => {
        const updatedCart = cart.filter((product: IProduct) => product.id !== id);
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        Swal.fire({
            title: 'Producto eliminado',
            text: `${name} se eliminado de tu carrito de compras.`,
            icon: 'success',
        })
        const cartProducts: IProduct[] = JSON.parse(localStorage.getItem("cart")||"[]")
        if(cartProducts) {
            let totalCart = 0;
            cartProducts.map((product: IProduct) => {
                totalCart = totalCart + product.price
            })
            setTotalCart(totalCart);
            setCart(cartProducts);
        }
    }

    useEffect(() => {
        const cartProducts: IProduct[] = JSON.parse(localStorage.getItem("cart")||"[]")
        if(cartProducts) {
            let totalCart = 0;
            cartProducts.map((product: IProduct) => {
                totalCart = totalCart + product.price
            })
            setTotalCart(totalCart);
            setCart(cartProducts);
        }
    },[])

    const handleClick = async () => {
        const idProducts = cart?.map((product) => product.id)
        await createOrder(idProducts, userData?.token!)
        Swal.fire({
            title: '¡Purchase made successfully!',
            text: 'Thank you for your purchase. You will receive an email with the details of your order.',
            icon: 'success',
            confirmButtonText: 'Accept'
        })
        setCart([])
        setTotalCart(0)
        localStorage.setItem("cart", "[]")
        router.push("/dashboard/orders")
    }

  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-between'>
        <div>
            {
                cart && cart.length > 0 ? (
                    cart.map((product: IProduct) => {
                        return (
                            <div key={product.id}>
                                <ProductCart 
                                  key={product.id} 
                                  {...product}
                                  onDelete={() => handleRemove(product.id, product.name)}
                                />
                            </div>
                        )
                    })
                ) : (
                    <div>
                        <p className='text-2xl'>YOUR CART IS EMPTY</p>
                    </div>
                )
            }
        </div>
        <div className='pl-5'>
            {
                cart && cart.length > 0 ? (
                    <div className='items-center'>
                        <div>
                            <p className='text-xs font-medium'>shopping cart - MILOSHOP products</p>
                            <p className='text-[10px] font-medium opacity-50'>{cart.length} PRODUCTOS</p>
                        </div>
                        <div className='flex items-center justify-around'>
                            <h1 className='text-base'>Total:</h1>
                            <h1>${totalCart}</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button 
                              onClick={handleClick} 
                              className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-1 px-3 rounded">
                                Checkout
                            </button>
                            <Link href="/products">
                              <button 
                                className="w-full bg-white hover:bg-slate-300 text-sm text-black font-bold py-1 px-3 rounded">
                                  Keep shopping
                              </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <Link href="/products">
                        <button 
                          className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-1 px-3 rounded">
                            Keep shopping
                        </button>
                    </Link>
                )
            }
        </div>
    </div>
  )
}

export default CartPage