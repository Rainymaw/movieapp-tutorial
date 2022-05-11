import React from 'react'
import '../styles/MovieList.css'
import { useState,useEffect } from 'react'

import AddFavorite from './AddFavorite'
const MovieList = ({movies,favorite,setFavorite,Component}) => {

    return (
    <div className='container'>
        {movies.map((movie)=>(
            <>
            <div className='movie-container' key={movie.id}>
                <img src={movie.Poster} alt={movie.Title} />
                {movie.Title}
                <Component 
                    favorite={favorite} 
                    setFavorite={setFavorite}
                    movie={movie} />
            </div>
            
            </>
        ))}
    </div>
  )
}

export default MovieList