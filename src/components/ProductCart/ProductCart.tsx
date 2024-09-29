"use client"
import React, { useEffect, useState } from 'react'
import IProduct, { IProductProps } from '../interfaces/Product'

const ProductCart: React.FC<IProductProps> = ({ name, price, image, onDelete }) => {

  return (
    <div className="flex flex-row items-center rounded-lg bg-gray-200 text-surface shadow-secondary w-[500px] h-[150px] md:flex-row gap-4 mb-1">
        <img className="h-full max-h-[150px] w-full max-w-[150px] rounded-t-lg object-cover" src={image} alt={`Imagen de producto ${name}`} />
        <div className="flex flex-col sm:p-0">
            <h2 className="text-base font-medium mb-2">{name}</h2>
            <p className="text-xs pb-2 mb-2">Sold and delivered by <a className="text-sky-700" href="">Miloshop</a></p>
            <button onClick={onDelete} type="button" className="px-0 py-0.5 text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete product</button>
        </div>
        <div>
            <p className="text-base">Price: ${price}</p>
        </div>
    </div>
  )
}

export default ProductCart