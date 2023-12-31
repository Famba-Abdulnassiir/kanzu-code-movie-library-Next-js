import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <div className='bg-cover bg-center min-h-screen flex justify-center items-center' style={{ backgroundImage: "url('/bg-image.jpg')" }}>
            <div className='bg-white rounded-md p-10 shadow-md w-96'>

                <div className=''>
                    <p className='text-center mb-1 text-2xl text-gray-900 font-bold'>Join us today!</p>
                    <h1 className=' text-xl text-center font-bold mb-1'>Kanzu Code <span className='text-amber-400'>Movie Lib</span></h1>
                    <p className='mb-2 text-sm text-center'>Your Number one stop for all movies</p>
                    <hr></hr>

                </div>
                <h2 className='mb-4 mt-2 font-semibold text-md'>Create an Account</h2>


                <form>
                    <div className='mb-4'>
                        <label htmlFor='email' className='mb-2 text-gray-700 font-bold block'>User Name:</label>
                        <input placeholder='Enter Your User Name' type='text' id='email' name='email' className='w-full border rounded py-2 px-3 focus:border-blue-500 focus:outline-none' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='mb-2 text-gray-700 font-bold block'>Email Address:</label>
                        <input placeholder='Enter Your Email Address' type='email' id='email' name='email' className='w-full border rounded py-2 px-3 focus:border-blue-500 focus:outline-none' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='email' className='mb-2 text-gray-700 font-bold block'>Password:</label>
                        <input placeholder='Enter Your password' type='password' id='password' name='password' className='w-full border rounded py-2 px-3 focus:border-blue-500 focus:outline-none' />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Signup</button>
                </form>

                <div className='text-center mt-5'>
                    <p className='text-sm text-gray-600'>Already a member? <Link href={'/login'} className='text-blue-500 hover:underline'>Signin</Link> || <Link href={'/'} className='text-blue-500 hover:underline'>Home</Link></p>
                </div>

            </div>


        </div>
    )
}
