"use client"
import Card from '@/components/Card/Card'
import IProduct from '@/components/interfaces/Product'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchPage = ({params}: { params: { id: string } }) => {
    const {id} = params;
    const router = useRouter()
    const [searchProducts, setSearchProducts] = useState<IProduct[]>()

    useEffect(() => {
        const storedResults = localStorage.getItem("searchResults");
        if(storedResults){
            setSearchProducts(JSON.parse(storedResults));
        } else {
            router.push("/")
        }
    },[id])
  return (
    <div className='flex flex-wrap items-center p-4 gap-4 justify-center'>
        {
            searchProducts &&
            searchProducts.map((product) => {
                return (
                    <Link href={`/products/${product.id}`} key={product.id}>
                           <Card key={product.id} {...product}/>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SearchPage