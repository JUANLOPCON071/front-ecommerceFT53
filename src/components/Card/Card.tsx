import React from "react";
import IProduct from "../interfaces/Product";

const Card:React.FC<IProduct> = ({id, name, price, description, image, categoryId, stock}) => {
    return (
        <div className="flex flex-row items-center rounded-lg bg-gray-200 text-surface shadow-secondary w-[300px] h-[200px] md:flex-row gap-4 mb-2 transform transition-transform duration-500 hover:scale-105">
            <img className="h-full max-h-[200px] w-full max-w-[160px] rounded-t-lg object-cover md:w-48" src={image} alt={`Imagen de producto ${name}`} />
            <div className="flex flex-col sm:p-0">
                <h2 className="text-base font-medium">{name}</h2>
                <p className="text-sm">Price: ${price}</p>
                <p className="text-xs">Stock: {stock}</p>
            </div>
        </div>
    )
}
export default Card;