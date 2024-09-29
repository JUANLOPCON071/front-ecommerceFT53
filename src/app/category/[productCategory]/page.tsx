import Card from '@/components/Card/Card';
import { getProductByCaregoy } from '@/helpers/product.helper';
import Link from 'next/link';
import React from 'react'

const ProductCategory = async ({params}: {params: {productCategory: string}}) => {
    const products = await getProductByCaregoy(params.productCategory)
  return (
    <div>
        {
            products &&
            products?.map((product) => {
                return (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <Card key={product.id} {...product} />
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ProductCategory;