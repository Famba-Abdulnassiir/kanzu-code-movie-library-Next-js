import React from 'react'
import MovieCard from '@/app/movies/MovieCard'
import Link from 'next/link'
import Image from 'next/image'




async function getMovieById(id) {
    const res = await fetch(`http://localhost:8080/api/v1/movies/${id}`)
    return await res.json();

}

export default async function page({ params }) {

    const { id } = params;
    const movie = await getMovieById(id)

    console.log(movie.movie.title)


    return (
        <div className="bg-white p-4 rounded shadow-md flex flex-row gap-4">
            <div className='w-2/4 '>
            <Image                
                src={movie.movie.imageUrl}
                alt={movie.movie.title}
                width={1000}
                height={1000} />

            </div>
            

            <div className=''>
                <h2 className="text-lg font-semibold">Title: {movie.movie.title}</h2>

                <p className="text-sm text-gray-600">Year: {movie.movie.releaseYear}</p>
                <p className="text-sm text-gray-600">Rating: {movie.movie.rating}%</p>
                <p className="text-sm text-gray-600">Director: {movie.movie.director}</p>
                <p className="text-sm text-gray-600">Description: {movie.movie.description}</p>
                <p className='bg-green-300 text-blue-500 w-7/12 text-sm pl-2 rounded-sm'>Buy or Rent</p>
            </div>


        </div>
    )
}
