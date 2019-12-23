import React from "react";
import Spinner from "./Spinner";

/* 

   suit    (tonyStark)      => ironMan
withLoader( WrappedComponent)=> WithLoader
(WithLoader is the result we call the hoc with the name of the function in lowercase)
*/
const withLoader = WrappedComponent => {
  class WithLoader extends React.Component {
    render() {
      return (
        /*this props.isLoading is a prop from the state of app.js
     passed in the MovieList component and used here */

        /* depending on isLoading state the display will change  between 
     spinner component and the wrappedCom in our case it s the MovieList .

     the props movie ={this.props.movie } must be present , 
     even we already passed this prop in App.js to the MovieList
     (we must know why ?!)
     */

        this.props.isLoading ? (
          <Spinner />
        ) : (
          <WrappedComponent movie={this.props.movie} />
        )
      );
    }
  }
  return WithLoader;
};

export default withLoader;
