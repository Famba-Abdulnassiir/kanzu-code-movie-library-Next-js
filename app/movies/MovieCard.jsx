import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ movie }) {
    return (
        <Link href={`/movie/${movie?.id}`}>
            <div key={movie.id} className="bg-white p-4 rounded shadow-md flex flex-col">
                <Image
                    className='w-full'
                    src={movie.imageUrl}
                    alt={movie.title}
                    width={1000}
                    height={1000} />

                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <div className='flex justify-between mb-1 mt-1 items-center'>
                    <p className="text-sm text-gray-600">Year: {movie.releaseYear}</p>
                    <p className="text-sm text-gray-600">Rating: {movie.rating}%</p>
                </div>


                <p className='bg-green-300 text-blue-500 w-7/12 text-sm pl-2 rounded-sm'>Buy or Rent</p>
            </div>
        </Link>

    )
}
