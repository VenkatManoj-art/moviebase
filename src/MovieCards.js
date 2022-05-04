import React from 'react'

const MovieCards = ({movie}) => {
  return (
    <div>
        <div className='movie'>
        <div>
          <p>{movie.Year}</p>
        </div>
         
         <div>
           <img src={movie.Poster !=='N/A'?movie.Poster:'https://via.placeholder.com/400'} 
           alt={movie.Title}/>
         </div>
        <div>
          <span>{movie.Type}</span>
          <h2>{movie.Title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MovieCards