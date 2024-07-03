import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-<center px-4 py-5 h-14">
    <div className="logo font-bold text-2xl">
        <span className='text-green-500'> &lt;</span>
        
        <span>pass</span><span className='text-green-700'>OPP/&gt;</span>
    </div>
    <ul>
        <li className='flex gap-4 '>
            <a className='hover:front-bold' href='/'>Home</a>
            <a clasName='hover:front-bold' href='#'>About</a>
            <a className='hover:front-bold'href='#'>Contact</a>

        </li>
    </ul>
    <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center'>
        <img  className='invert p-5 w-36 ' src="icons/github.svg" alt="github logo" />
        <span className='font-bold px-2'></span>
    </button>
      </div>
    </nav>
  )
}

export default Navbar
