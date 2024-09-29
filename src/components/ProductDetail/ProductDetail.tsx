"use client"
import IProduct from "@/components/interfaces/Product";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Swal from 'sweetalert2';

const ProductDetail: React.FC<IProduct> = ({id, name, description, price, stock, image, categoryId}) => {
    const router = useRouter()
    const {userData} = useAuth()

      const handleClick = () => {
        const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
        const productExist = cart.some((product: IProduct) => {
            if(product.id === id) return true;
            return false
        })
        if(productExist) {
            alert("This product exist in your cart")
            router.push("/dashboard/cart")
        } else {
            cart.push({
                name,
                description,
                image,
                price,
                stock,
                id,
                categoryId
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            Swal.fire({
                title: 'Product added',
                text: `${name} has been added to your shopping cart.`,
                icon: 'success',
            })
            router.push("/dashboard/cart")
        }
    }

    return (
        <div className="relative flex flex-col md:flex-row items-center rounded-lg bg-gray-200 text-surface shadow-secondary w-[650px] h-[350px] gap-4 mb-2">
            <img className="h-full max-h-[350px] w-full max-w-[300px] rounded-t-lg object-cover" src={image} alt={`Imagen de producto ${name}`} />
            <div className=" flex flex-col w-auto h-full p-1 sm:p-4">
                <h2 className="text-xl font-semibold pb-2">{name}</h2>
                <p className="text-sm pb-2">{description}</p>
                <p className="text-[11px] pb-2">Sold and delivered by <a className="text-sky-700" href="">Miloshop</a></p>
                <p className="text-xs font-semibold text-sky-700 pb-2">Free shipping</p>
                <p className="text-xs font-semibold pb-2">Price: ${price}</p>
                <p className="text-xs font-semibold pb-2">Stock: {stock}</p>
                <div className="flex justify-between mt-3">
                {
                !userData?.token ? (
                    <Link href={"/login"}><button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-1 px-3 rounded">Sign in to buy</button></Link>
                ) : (
                    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-[15px] text-white font-bold py-1 px-3 rounded">Add to cart</button>
                )
              }
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;