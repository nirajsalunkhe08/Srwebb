import React from 'react'
import b2 from "../assets/b2.png"

function Heading() {
  return (
    <div className='relative w-full h-[200px] bg-amber-200 flex justify-center items-center overflow-hidden'>
      <img
        src={b2}
        alt="Salunkhe Restaurant Banner"
        className='h-full object-contain z-10'
      />
      
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-amber-200 to-transparent z-20" />

      {/* Right Gradient */}
      <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-amber-200 to-transparent z-20" />
    </div>
  )
}

export default Heading
