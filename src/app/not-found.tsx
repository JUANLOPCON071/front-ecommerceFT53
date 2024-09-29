import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main>
      <h1 className='text-center text-9xl font-bold'>404</h1>
      <img className='w-[300px] mx-auto' src="/images/404.png" alt="404" />
      <h2 className="text-center text-3xl font-semibold mb-3">Something´s missing.</h2>
      <p className="text-center text-2xl font-semibold mb-3">The page you looking for is not found.</p>
      <Link className="flex justify-center" href="/products"><button className="w-[150px] bg-white hover:bg-slate-300 text-sm text-black font-bold py-1 px-3 rounded">Go to shop</button></Link>
    </main>
  )
}