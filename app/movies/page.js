import React from 'react'
import MovieCard from './MovieCard'


async function getMovies(){
  const res = await fetch('https://kanzu-code-movie-library-backend.onrender.com/api/v1/movies', { next: { revalidate: 300 } })
  return await res.json()
  
}

export default async function page() {

  const movies = await getMovies()
  
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-5'>All Movies</h1>   
    <div className="grid grid-cols-4 mt-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
    </div>
    </div>
  )
}
