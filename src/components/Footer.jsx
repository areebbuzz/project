import React from 'react'

const Footer = () => {
  return (
    <div className= 'bg-slate-800 text-white flex flex-col justify-center  w-full'>
        <div className="logo font-bold text-white text-2xl">
            <span className='text-green-500'> &lt;</span>
            <span>pass</span><span className='text-green-500'>OP/&gt;</span> 
          </div>  
        <div className='flex justify-center item-center'> Created with <img className ='w-10 mx=2' src="icons/heart.png" alt="" /> by Areeb </div>
    </div>
  )
}

export default Footer
