import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AddFavorite from './AddFavorite'
import RemoveFavorite from './RemoveFavorite'


const Movies = () => {
  const [search,setSearch] = useState('')
  const [favorite,setFavorite]= useState([])
  const [movies,setMovies]=useState([])
  const getMovieRequest = async(x)=>{
    const url =`http://www.omdbapi.com/?s=${x}&apikey=263d22d8`
    const request = await axios.get(url)
    const response = request.data
    if (response.Search){
    setMovies([...response.Search])
    }
}
useEffect(()=>{
  getMovieRequest(search)
},[search])
  return (
<>
    <SearchBar search={search} setSearch={setSearch} />
    <MovieList 
      movies= {movies}
      favorite = {favorite}
      setFavorite = {setFavorite}
      Component = {AddFavorite}
      />
     <MovieList 
      movies= {favorite}
      favorite = {favorite}
      setFavorite = {setFavorite}
      Component = {RemoveFavorite}
      /> 
    
</>
  )
}

export default Movies