import React from 'react'
import IProduct from '../interfaces/Product'

const OrderProductCard: React.FC<IProduct> = ({id, name, price, description, image, categoryId, stock}) => {
  return (
    <div className="flex flex-row items-center rounded-lg bg-white text-surface shadow-secondary w-[200px] h-[60px] md:flex-row gap-4 mb-2">
        <img className="h-full max-h-[100px] w-full max-w-[70px] rounded-lg object-cover" src={image} alt={`Imagen de producto ${name}`} />
        <div className="flex flex-col sm:p-0">
            <h2 className="text-xs font-medium">{name}</h2>
            <p className="text-xs">Price: ${price}</p>
        </div>
    </div>
  )
}

export default OrderProductCard