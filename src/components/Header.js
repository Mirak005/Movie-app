import React from 'react'
import StarRatingComponent from "react-star-rating-component";

export default function Header({rating, onStarClick,handelSearch}) {
    return (
        <header>
        <input placeholder="search..." className="search-input" type="text"  onChange={handelSearch}/>
        <button className="button-search">Search</button>
        <div className="rating-search">
          <h5>Minimum Rating</h5>
          <StarRatingComponent
            className="rating-star-search"
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={onStarClick}
          />
        </div>
      </header>
    )
}
