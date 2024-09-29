"use client"
import Link from 'next/link'
import categoriesToPreLoad from '@/helpers/categories'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import SearchBar from '../SearchBar/SearchBar'
import { fetchProducts } from '@/helpers/product.helper'
import IProduct from '../interfaces/Product'


export const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const {userData, setUserData} = useAuth();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar tamaño de pantalla al cargar la página

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogOut = () => {
    const confirmLogout = window.confirm("¿Estás seguro de que deseas cerrar sesión?")
    if(confirmLogout){
      localStorage.clear()
      setUserData(null)
      Swal.fire({
        title: '¡Logged out successfully',
        text: 'You have logged in successfully.',
        icon: 'success',
        confirmButtonText: 'Accept'
    });
    }
    router.push("/login")
  }

  const handleSearch = async (query: string) => {
    localStorage.removeItem("searchResults")
    const getProducts = await fetchProducts();
    const searchResults = getProducts.filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(searchResults);
    
    if(searchResults.length > 0) {
      localStorage.setItem("searchResults", JSON.stringify(searchResults));
      router.push(`/search/${query.toLocaleLowerCase()}`)
    } else {
      alert("No se encontro el producto")
    }
  }
  console.log(filteredProducts);

  return (
    <div className='bg-blue-600 items-center w-full pb-1 '>
      <nav className='bg-blue-600'>
      <div className='flex justify-between pr-6 pl-6 mt-3'>
          <Link className='text-xl md:text-4xl font-semibold text-white' href="/">
            MiloShop<span>.</span>
          </Link>
          
          <div className='flex flex-row items-center justify-between'>
            {
              !isMobile? (
                <ul className='flex pr-9'>
              <li className='text-white'>
                <Link className='text-xl p-2 font-semibold opacity-50 hover:opacity-100 hover:border-yellow-500' href="/">Home</Link>
              </li>
              <li className='text-white'>
                <Link className='text-xl p-2 font-semibold opacity-50 hover:opacity-100' href="/products">Shop</Link>
              </li>
              <li className='text-white'>
                <Link className='text-xl p-2 font-semibold opacity-50 hover:opacity-100' href="/blog">Blog</Link>
              </li>
              <li className='text-white'>
                <Link className='text-xl p-2 font-semibold opacity-50 hover:opacity-100' href="/contactus">ContactUs</Link>
              </li>
            
            </ul>
              ) : (
                <div className='flex'>
                  <div className='relative mr-6'>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className='text-white text-base p-2 font-semibold opacity-50 hover:opacity-100'>
                        Menu
                    </button>
                    {isMenuOpen && (
                      <ul className='absolute bg-blue-600 mt-2 right-0 rounded-lg p-4 shadow-lg z-50'>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/'>Home</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/products'>Shop</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/blog'>Blog</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/contactus'>ContactUs</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className='relative mr-6'>
                    <button
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className='text-white text-base p-2 font-semibold opacity-50 hover:opacity-100'>
                        Categories
                    </button>
                    {isCategoryOpen && (
                      <ul className='absolute bg-blue-600 mt-2 right-0 rounded-lg p-4 shadow-lg z-50'>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/products'>All</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/1'>Smartphones</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/2'>Laptops</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/3'>Tablets</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/4'>Headphones</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/5'>Cameras</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/6'>Printers</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/7'>Monitors</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/8'>Storage</Link>
                        </li>
                        <li className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100'>
                          <Link href='/category/9'>Accessories</Link>
                        </li>

                      </ul>
                    )}
                  </div>
                </div>
              
              )
            }

           {
             !userData?.token ? (
              <ul className='flex items-center justify-between'>
                <li className='mr-5'>
                  <Link className='text-white text-sm md:text-xl p-2 font-semibold opacity-50 hover:opacity-100' href="/login">
                     Sign In / Sign Up
                  </Link>
                </li>
              </ul>
             ) : (
              <ul className='flex items-center justify-between'>
                <li className='mr-5'>
                  <Link className='flex' href="/dashboard">
                     <img className='w-[22px] mr-2 transform transition-transform duration-500 hover:scale-125' src="https://untree.co/demos/furni/images/user.svg" alt="" />
                     <p className='text-white text-[15px] p-2 font-semibold opacity-50 hover:opacity-100 hidden sm:block'>{userData.userData.name}</p>
                  </Link>
                </li>
                <li className='mr-4'>
                  <Link  href="/dashboard/cart">
                    <img className='w-[25px] transform transition-transform duration-500 hover:scale-125' src="https://untree.co/demos/furni/images/cart.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogOut} href="">
                     <p className=' text-white text-sm md:text-xl p-2 font-semibold opacity-50 hover:opacity-100 '>LogOut</p>
                  </Link>
                </li>
              </ul>
             )
            }

          </div>
      </div>
    </nav>
    <div className='w-8/9 relative'>
      <ul className='flex justify-between'>
        {!isMobile &&
          categoriesToPreLoad.map((categoty) => {
            return (
              <li key={categoty.id} className='text-white'>
                  <Link 
                    className='text-base p-2 font-semibold opacity-50 hover:opacity-100' 
                    href={`/category/${categoty.id}`}>
                      {categoty.name}
                  </Link>
              </li>
            )
          })
         }
      </ul>
    </div>
    <div >
      <SearchBar 
        onSearch={handleSearch}
      />
    </div>
    </div>
  )
}

export default Navbar