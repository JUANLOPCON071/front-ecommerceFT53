"use client"
import React, { useEffect, useState } from 'react'
import { IOrder } from '../interfaces/Types'
import IProduct from '../interfaces/Product'
import OrderProductCard from './OrderProductCard'

const OrderCard: React.FC<IOrder> = ({id, date, products, status }) => {
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        let totalPrice = 0;
        products.map((product:IProduct) => {
            totalPrice = totalPrice + product.price
        })
        setTotal(totalPrice)
    })
  return (
    <div key={id} className='w-[850px] bg-white mt-1 rounded-sm p-1'>
        <div className='flex items-center justify-around'>
            <div>
                <p className='text-xs font-medium'>Pedido N {id}</p>
                <p className='text-xs font-medium opacity-50'>Fecha de pedido: {new Date(date)?.toDateString()}</p>
            </div>
            <div>
                <div className='flex'>
                    <p className='text-xs font-medium opacity-50 mr-1'>Cantidad:</p><a className='text-xs font-medium text-black' href=""> {products.length} productos</a>
                </div>
                <div className='flex'>
                    <p className='text-xs font-medium opacity-50 mr-1'>Status:</p><a className='text-xs font-medium text-cyan-600' href="">{status}</a>
                </div>
            </div>
            <div className='flex'>
                <p className='text-xs font-medium opacity-50 mr-1'>Total del pedido:</p><a className='text-xs font-medium' href="">${total}</a>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-around'>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <OrderProductCard key={product.id} {...product}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OrderCard