import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 w-full'>
      <nav className='text-white h-20 min-w-sm  flex justify-between items-center border-b-2 px-6 lg:px-16'>
        <ul className='h-20 w-40 flex justify-center items-center'>
            <li className='font-bold text-2xl'>AI Suite</li>
        </ul>
        <ul className='hidden md:flex items-center gap-8 lg:gap-12'>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Home</li>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Products</li>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Solutions</li>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Pricing</li>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Docs</li>
            <li className='font-medium hover:text-[#BC4F0B] transition-all duration-200 hover:cursor-pointer'>Company</li>
        </ul>
        <button className='md:hidden text-3xl'> ☰</button>
      </nav>
    </div>
  )
}

export default Nav
