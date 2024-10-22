import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className='bg-black text-wrap p-6' >
        <nav className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-white hover:text-blue-500'>Game Store</h1>
            <Link to="/">Home</Link>
        </nav>
    </header>
  )
}
