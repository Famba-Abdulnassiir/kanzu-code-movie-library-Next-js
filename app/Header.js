import Link from 'next/link'
import React from 'react'


export default function Header() {
    return (
        <div className='h-15 bg-indigo-950 flex justify-between items-center mt-auto align-middle'>
            <div className='ml-16 text-xl'>
                <Link href={'/'}> <h1 className='text-white  p-2 font-bold'>Kanzu Code <br /> <span className='text-amber-400'>Movie Lib</span></h1> </Link>
            </div>

            <div className='text-white ml-6 font-semibold'>
                <Link href={'/'} className='mr-4'>Home</Link>
                <Link href={'/movies'}>All Movies </Link>
            </div>

            <div className='flex-1 divider'></div>

            <div>
                <input className='p-1 rounded-sm bg-slate-300 mr-6' type='search' placeholder='Search Movie...' />
            </div>

            <div className='mr-16 font-semibold'>
                <Link className='text-white' href={'/login'}>Signin</Link>
                <Link className='text-white' href={'/signup'}> | Signup</Link>
            </div>



        </div>

    )
}
