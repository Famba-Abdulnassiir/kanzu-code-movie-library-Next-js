"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            setLoading(false);
            if (!response.ok) {
                setError((await res.json()).message);
                return;
            }


            const { access_token } = await response.json();
            document.cookie = `token=${access_token}; path=/`;
            sessionStorage.setItem("user_data", JSON.stringify(data))
            router.push("/movies");
        } catch (error) {
            setLoading(false);
            setError(error);

        }
    };


    return (
        <div className='bg-white rounded-md p-10 shadow-md w-96'>

            <div className=''>
                <p className='text-center mb-1 text-2xl text-gray-900 font-bold'>Welcome back!</p>
                <h1 className=' text-xl text-center font-bold mb-1'>Kanzu Code <span className='text-amber-400'>Movie Lib</span></h1>
                <p className='mb-2 text-sm text-center'>Your Number one stop for all movies</p>
                <hr></hr>

            </div>
            <h2 className='mb-4 mt-2 font-semibold text-md'>Login to continue</h2>

            <form onSubmit={handleLogin}>
                {error && (
                    <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
                )}
                <div className='mb-4'>
                    <label htmlFor='email' className='mb-2 text-gray-700 font-bold block'>Email Address:</label>
                    <input placeholder='Enter Your Email Address' type='email' id='email' name={email} onChange={(e) => setEmail(e.target.value)}
                        required className='w-full border rounded py-2 px-3 focus:border-blue-500 focus:outline-none' />
                </div>

                <div className='mb-4'>
                    <label htmlFor='password' className='mb-2 text-gray-700 font-bold block'>Password:</label>
                    <input placeholder='Enter Your password' type='password' id='password' name={password} onChange={(e) => setPassword(e.target.value)}
                        requiredclassName='w-full border rounded py-2 px-3 focus:border-blue-500 focus:outline-none' />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" disabled={loading} >Login</button>
            </form>

             <div className='text-center mt-5'>
                <p className='text-sm text-gray-600'>Don't have an account? <Link href={'/signup'} className='text-blue-500 hover:underline'>Signup</Link> || <Link href={'/'} className='text-blue-500 hover:underline'>Home</Link></p>

           </div>

     </div>
    )
}
