import React from 'react'

const AddFavorite = ({favorite,setFavorite,movie}) => {
    const handleClick =(id)=>{
        const filterFavorite = favorite.filter((movie)=>
            movie.imdbID !==id
        )
        setFavorite([...filterFavorite])
    }
  return (
    <div className='overlay'
    onClick={()=>handleClick(movie.imdbID)}>
        Remove from favorites
    </div>
  )
}

export default AddFavorite