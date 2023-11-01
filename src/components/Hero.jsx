"use client"
import React from 'react'
import Typed from 'typed.js'
import Link from 'next/link';


export default function Hero() {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current,{
            strings:['Wormhole', 'Gateway '],
            typeSpeed:140,
            loop:true,
            startDelay: 2,
            backDelay:1000,
            backSpeed:150,
        });
        return () => {
            typed.destroy();
        }
    },[]);

  return (
   <>
    <div className='text-white'>
        <div className='max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center '>
            <p className='p-2'>Best way to build cross-chain</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>The Gateway to Cosmos</h1>
           
                <div className='flex justify-center items-center py-4'>
                    <p className='pt-2 md:text-4xl sm:text-xl text-l font-bold'>xChain Everything with </p>
                    <span className="pt-2 pl-2 md:text-4xl sm:text-xl text-l font-bold md:pl-2" ref={el} />
                
                    
                </div>
            <Link href="/QuickStart"><button className="border border-gray-200 max-w-[300px] p-4 m-10 hover:bg-white hover:text-black hover:border-black ">GETTING STARTED </button></Link>
            
        </div>
    
    </div>
   </>
  )
}
