"use client"
import Link from 'next/link'
import React from 'react'

const GlobalError = ({reset}: ErrorPageProps) => {
  return (
    <main>
        <h1 className='text-center text-5xl font-bold'>ERROR!</h1>
        <img className='w-[300px] mx-auto' src="/images/error.png" alt="Error" />
        <p className="text-center text-2xl font-semibold mb-3">It seems an error has occurred</p>
        <div className="flex justify-between">
          <button className="w-[150px] bg-white hover:bg-slate-300 text-sm text-black font-bold py-1 px-3 rounded" onClick={reset}>Try again</button>
          <Link className="flex justify-center" href="/"><button className="w-[150px] bg-white hover:bg-slate-300 text-sm text-black font-bold py-1 px-3 rounded">Go home</button></Link>
        </div>
    </main>
  )
}

export default GlobalError