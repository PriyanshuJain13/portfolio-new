import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white flex flex-row justify-between'>
        <h1 className='text-6xl'>PJ</h1>
        <ul className='flex-row space-x-10 hidden sm:flex'>
            <li className='flex items-center'><a href='/'>Home</a></li>
            <li className='flex items-center'><a href='/'>About</a></li>
            <li className='flex items-center'><a href='/'>Service</a></li>
            <li className='flex items-center'><a href='/'>Contact</a></li>
        </ul>
        <button className='btn p-4 hover:'>Let's Talk</button>
    </nav>
  )
}

export default Navbar