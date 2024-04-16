import React, { useState, useEffect } from 'react'

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([])
  useEffect(() => {
    // Define the URL for the API endpoint with parameters
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${query}&per_page=24&format=json&nojsoncallback=1` //

    // Fetch images from the API endpoint
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch images')
        }
        return response.json()
      })
      .then((data) => {
        // Update the state with the fetched images
        setImages(data.photos.photo)
      })
      .catch((error) => {
        console.error('Error fetching images:', error)
      })
  }, [query]) // Empty dependency array ensures the effect runs only once

  return (
    <div className='container'>
      <h1 className='text-center'>{query}</h1>
      <div className='row'>
        {images.map((image) => (
          <div className='col-md-4' key={image.id}>
            <div className='card mb-4'>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                className='card-img-top'
                alt={image.title}
              />
              <div className='card-body'>
                <h5 className='card-title'>{image.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
