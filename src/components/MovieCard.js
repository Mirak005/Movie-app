import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import play from "./play-flat.png"


export default function MovieCard({movie}) {
    return (
        <div  className="movie-card">
        <StarRatingComponent 
   className="rating-star"
  
     name="rate1" 
     starCount={5}
     value={movie.rating}
     />
     <img className="movieImage" src={movie.image}
      alt="movie"/>
     <h3 className="movieName">{movie.name}</h3>
     <p className="movieYear">{movie.year}</p>
     <a className="overlay" href="#"><img src={play} alt="img"/></a>
       
   </div>
    )
}
