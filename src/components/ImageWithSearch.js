import React, { useState } from 'react'
import logo from '../images/logo.avif'
import ImageGallery from './ImageGallery.js'

const ImageWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  return (
    <div className='image-with-search'>
      <div className='image-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button>Search</button>
      </div>

      <h1>{searchQuery}</h1>

      <ImageGallery query={searchQuery} />
    </div>
  )
}

export default ImageWithSearch
