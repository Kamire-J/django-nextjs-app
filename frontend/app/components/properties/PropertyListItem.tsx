import Image from 'next/image'
import React from 'react'

const PropertyListItem = () => {
  return (
    <div className='cursor-pointer'>
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image 
          fill 
          src="/luxury_home.jpg" 
          sizes='(max-width: 760px) 768px, (max-width: 1200px) 768px, 768px'
          className='hover:scale-110 object-cover transition h-full w-full'
          alt='Beach House'
          />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500"><strong>$400 per night</strong></p>
      </div>
    </div>
  )
}

export default PropertyListItem