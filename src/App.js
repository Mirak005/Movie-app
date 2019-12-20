import React from "react";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header"
import FormAdd from "./components/FormAdd";
import {movieData} from './components/data'
import add from './components/add-logo.png'
import "./App.css";




class App extends React.Component {
  state = {
    rating: 1,
    movieData:movieData,
    modalIsOpen: false,
    movieAdd: {
      name: "",
      year: "",
      image: "",
      rating: ""
    },
    search:""
  };
  // handelSearchClick=()=>{
  // this.movieData.map(movie=>this.state.rating<=movie.rating && movie.name.toLowerCase().includes(this.state.search.toLowerCase().trim())?movie:null)

  // }

  
handelSearch=(e)=>this.setState({search:e.target.value})

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  onStarClick=(nextValue)=> {
    this.setState({ rating: nextValue });
  }

  handelName = e => {
    this.setState({
      movieAdd: { ...this.state.movieAdd, name: e.target.value }
    });
  };
  handelRating = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        rating:
          /[0-9]{1}/.test(e.target.value) && e.target.value < 6
            ? e.target.value
            : ""
      }
    });
  };
  handelYear = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        year:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value > 1900
            ? e.target.value
            : ""
      }
    });
  };
  handelLink = e => {
    this.setState({
      movieAdd: {
        ...this.state.movieAdd,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    if (Object.values(this.state.movieAdd).indexOf("") > -1) {
     
      alert("Enter a valid informations");
    } else {
      this.setState({
        movieData: [...this.state.movieData, this.state.movieAdd],modalIsOpen:false,movieAdd:{name: "",
        year: "",
        image: "",
        rating: ""}
      });
      
    }
  };

  render() {
    

    return (
      <div>
        <Header rating={this.state.rating}  onStarClick={this.onStarClick} handelSearch={this.handelSearch}/>
        <div className="movie-list-container">
          <MovieCard movie={this.state.movieData} search={this.state.search} rating={this.state.rating}/>
          <button className="addMovie" onClick={this.openModal}>
            <img className="logoAdd" src={add}  alt="Fail to load"/>
          </button>
         <FormAdd 
         modalIsOpen={this.state.modalIsOpen}
         closeModal={this.closeModal}
         handelName={this.handelName}
         handelRating={this.handelRating}
         handelYear={this.handelYear}
         handelLink={this.handelLink}
         handelSubmit={this.handelSubmit}  
         />
        </div>
      </div>
    );
  }
}

export default App;
