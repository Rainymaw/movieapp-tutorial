import React from 'react'
import { useState } from 'react'

const SearchBar = ({search,setSearch}) => {
    
  return (
    <div>
        <input
        placeholder='Search a movie ....'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBar