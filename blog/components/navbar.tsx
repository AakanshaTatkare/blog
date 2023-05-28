import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bg from '../public/background.avif'

export default function navbar() {
    return (
        <div className="bg-img " style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height:"100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            
        }}>
            <div className='container'>
                <nav className=' w-full top-0   bg-transparent rounded-b-lg'>
                    <Link href="/" >
                        <div className='flex items-center cursor-pointer mb-0 pb-0 '>
                            <img className=' ' src="ss.png" alt="" width={50} />
                            <span><h3 id="header" className="text-3xl font-light tracking-widest  underline decoration-green-1000 text-slate-300 underline-offset-4 ">
                                BLOGGERS
                            </h3>
                            </span>


                        </div>

                        <p className="mx-12 font-serif mt-0 p-0 my-0">
                            some text here like company headline
                        </p>
                    </Link>
                </nav>
                <div className='p-20'>
                    
                    <h1 className='  text-3xl  flex font-sans font-thin justify-center  '>Some short content here</h1>
                </div>
            </div>
        </div>


    )
}
