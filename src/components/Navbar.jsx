import React from 'react'
import Image from 'next/image';


export default function Navbar() {
  return (
    <>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto  border-b px-4 text-white'> 
        <Image src="/wormholeimg.png" alt='Wormhole Logo' width={70} height={70} className="justify-center items-center " />
        <h1 className='w-full text-3xl hidden md:flex  '>
        
          WORMHOLE
        </h1>
        <h1 className='w-full text-2xl block md:hidden justify-center items-center   mx-auto '>
  WORMHOLE
</h1>




      </div>
    </>
  )
}
