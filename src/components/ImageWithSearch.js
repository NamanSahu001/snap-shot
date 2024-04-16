import React, { useState } from 'react'
import logo from '../images/logo.avif'
import ImageGallery from './ImageGallery.js'

const ImageWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sendValue, setSendValue] = useState('')

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    setSendValue(searchQuery)
  }
  return (
    <div className='image-with-search'>
      <div className='image-container'>
        <img src={logo} alt='logo' />
      </div>
      <form className='search-container' onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type='submit'>Search</button>
      </form>
      <ImageGallery query={sendValue} />
    </div>
  )
}

export default ImageWithSearch
