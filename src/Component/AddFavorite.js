import React from 'react'

const AddFavorite = ({favorite,setFavorite,movie}) => {
  const handleClick = (movie)=>{
    if (favorite.includes(movie)===false){
      setFavorite([...favorite,movie])
    }
  }
  return (
    <div className='overlay'
    onClick={()=>handleClick(movie)}>
        Add to favorites
    </div>
  )
}

export default AddFavorite

