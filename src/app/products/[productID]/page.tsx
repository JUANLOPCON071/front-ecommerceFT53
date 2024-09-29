import DetailProductProps from '@/components/interfaces/DetailProductProps'
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from '@/helpers/product.helper';
import React from 'react'

const DetailProduct: React.FC<DetailProductProps> = async ({params}) => {
    const {productID} = params;
    const product = await getProductById(productID)

  return (
    <ProductDetail {...product}/>
  )
}
export default DetailProduct;