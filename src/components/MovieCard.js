import React from "react"
import play from "./play-flat.png"
import StarRatingComponent from 'react-star-rating-component';



 function MovieCard({movie,search,rating}) {
   if(search==="")
  {
    return (
  movie.map((movie,i)=>{
   return rating<=movie.rating?(
<div key={i} className="movie-card">
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
            
        </div>):null
  })
        
    )}else {
      return(movie.map(function(movie,i){
      return rating<=movie.rating && movie.name.toLowerCase().includes(search.toLowerCase().trim())?
      (<div key={i} className="movie-card">
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
      
      </div> ):null;


        


      })



      )


    }
}

export default MovieCard