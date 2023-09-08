import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white flex flex-row justify-between'>
        <h1 className='text-6xl'><a href='/'>PJ</a></h1>
        <ul className='flex-row space-x-10 hidden sm:flex'>
            <li className='flex items-center'><a href='/'>Home</a></li>
            <li className='flex items-center'><a href='/about'>About</a></li>
            <li className='flex items-center'><a href='/about'>Service</a></li>
            <li className='flex items-center'><a href='#contact'>Contact</a></li>
        </ul>
        <button className='btn p-4 hover:'><a href='#contact'>Let's Talk</a></button>
    </nav>
  )
}

export default Navbar