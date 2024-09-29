"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IOrder} from '../interfaces/Types';
import Link from 'next/link';
import { createOrder, getOrders } from '@/helpers/orders.helper';
import OrderCard from '../OrderCard/OrderCard';
import { useAuth } from '@/context/AuthContext';

const OrdersPage = () => {
    const router = useRouter();
    const {userData} = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([])


    const fetchData = async () => {
        const ordersResponse = await getOrders(userData?.token!)
        setOrders(ordersResponse)
    }

    useEffect(() => {
        if(userData?.userData.name) {
            userData?.userData.name === undefined ? router.push("/login") : fetchData()
        }
    },[userData?.userData])

  return (
    <div>
        <div className='w-full items-center justify-between'>
            <p className='text-xs font-medium'>{orders.length} Pedidos</p>
            {
                orders && orders.length > 0 ? (
                    orders.map((order) => {
                        return (
                            <div key={order.id}>
                                <OrderCard key={order.id} {...order} />
                            </div>
                        )
                    })
                ) : (
                    <div>
                        <p>Aun no tines ordenes creadas</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default OrdersPage;