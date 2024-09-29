import { fetchProducts } from "@/helpers/product.helper";
import Card from "../Card/Card";
import React from "react";
import Link from "next/link";

const CardList = async () => {
    const fetchData = await fetchProducts();
    return (
        <div className="flex flex-wrap items-center p-4 gap-4 justify-center">
            {
                fetchData &&
                fetchData?.map((product) => {
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
export default CardList;