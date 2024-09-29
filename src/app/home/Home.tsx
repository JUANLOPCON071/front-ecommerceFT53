import CardList from "@/components/CarsList/CardList";
import Link from "next/link";
import React from "react";

const HomeContainer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center pr-6 pl-6">
                <div className="w-full">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-semibold mb-3">Better Technology Within 
                        The Reach Of a click
                        </h1>
                        <p className="text-lg font-semibold opacity-60 mb-4">Todo lo que necesitas en tecnología, en un solo lugar. 
                            Ofertas exclusivas: ¡Hasta 40% de descuento en gadgets seleccionados!
                        </p>
                        <div className="flex items-center mt-3">
                            <Link href="/products"><button type="button" className="flex items-center justify-center w-40 h-7 text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Shop Now</button></Link>
                            <Link href="/"><button type="button" className="flex items-center justify-center w-28 h-7 text-gray-900 bg-white hover:bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center h-screen">
                        <img className="w-6/7 rounded-2xl border-double" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/04/estos-son-6-dispositivos-todos-esperan-apple-presente-2023-3005574.jpg?tf=1200x" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <CardList/>
            </div>
            <div className="flex flex-col md:flex-row items-center pr-6 pl-6">
                <div className="w-full">
                    <div className="flex items-center justify-center h-screen">
                        <img className="w-5/6  rounded-lg border-double" src="https://media.es.wired.com/photos/65aa9aa0bbced89ed9abb824/master/w_1600,c_limit/Apple-Vision-Pro-lifestyle-working_print.jpeg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <h2 className="text-2xl font-semibold pb-2">Why Choose Us</h2>
                        <p className="text-sm opacity-60">Discover the perfect blend of quality, affordability, and exceptional customer service. Our products are crafted to meet your every need.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-[180px] p-2 pl-2 mr-20">
                            <div className="pb-1">
                                <img className="w-[40px] h-[40px]" src="https://untree.co/demos/furni/images/truck.svg" alt="" />
                            </div>
                            <h3 className="text-sm font-semibold">Fast & Free Shipping</h3>
                            <p className="text-sm opacity-60">Enjoy quick and reliable delivery at no extra cost. Shop with confidence, 
                               knowing your order will arrive swiftly and securely.
                            </p>
                        </div>
                        <div className="w-[180px] p-2">
                            <div className="pb-1">
                                <img className="w-[40px] h-[40px]" src="https://untree.co/demos/furni/images/bag.svg" alt="" />
                            </div>
                            <h3 className="text-sm font-semibold">Easy to Shop</h3>
                            <p className="text-sm opacity-60">Experience a seamless and intuitive shopping journey. 
                               Our user-friendly interface makes it simple to find and purchase exactly what you need.
                            </p>
                        </div>
                        <div className="w-[180px] p-2 mr-20">
                            <div className="pb-1">
                                <img className="w-[40px] h-[40px]" src="https://untree.co/demos/furni/images/support.svg" alt="" />
                            </div>
                            <h3 className="text-sm font-semibold">24/7 Support</h3>
                            <p className="text-sm opacity-60">Count on us anytime, day or night. 
                               Our dedicated support team is always available to assist you with any inquiries or issues.
                            </p>
                        </div>
                        <div className="w-[180px] p-2">
                            <div className="pb-1">
                                <img className="w-[40px] h-[40px]" src="https://untree.co/demos/furni/images/return.svg" alt="" />
                            </div>
                            <h3 className="text-sm font-semibold">Hassle Free Returns</h3>
                            <p className="text-sm opacity-60">Shop with peace of mind knowing that our simple and straightforward return policy makes it easy to return items, 
                               no questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default HomeContainer;