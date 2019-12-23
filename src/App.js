import React from "react";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import FormAdd from "./components/FormAdd";
import { movieData } from "./components/data";
import add from "./components/add-logo.png";
import "./App.css";

class App extends React.Component {
  state = {
    rating: 1,
    movieData: movieData,
    modalIsOpen: false,
    movieAdd: {
      name: "",
      year: "",
      image: "",
      rating: ""
    },
    search: "",
    isLoading: false
    /*the state of is loading is false ,
     on event the state change to true
      and the setTimeout will return it state to false 
    */
  };

  getVisibileData = () => {
    console.log(
      this.state.movieData.filter(
        movie =>
          this.state.rating <= movie.rating &&
          movie.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase().trim())
      )
    );
    return this.state.movieData.filter(
      movie =>
        this.state.rating <= movie.rating &&
        movie.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase().trim())
    );
  };
  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({ isLoading: true });
  };

  handelSearch = e => {
    //fake loading
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({ search: e.target.value, isLoading: true });
  };

  onStarClick = nextValue => {
    //fake loading
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({ rating: nextValue, isLoading: true });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

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
        movieData: [...this.state.movieData, this.state.movieAdd],
        modalIsOpen: false,
        movieAdd: { name: "", year: "", image: "", rating: "" }
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          rating={this.state.rating}
          onStarClick={this.onStarClick}
          handelSearch={this.handelSearch}
        />
        <div className="movie-list-container">
          <MovieList
            movie={this.getVisibileData()}
            isLoading={this.state.isLoading}
          />
          <button className="addMovie" onClick={this.openModal}>
            <img className="logoAdd" src={add} alt="Fail to load" />
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
