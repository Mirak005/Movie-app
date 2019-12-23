import React from "react";

/* the spinner component is ready to use with it style in app.css 
until we imported the app.css in app.js and the spinner component is a 
grandChild of app.js via MovieList and withLoader
so the component output is read with the correct style 
check the end of App.css
i think best practice is to create for each component his style on a single file to give it the ability to be reused 
*/

export default function Spinner() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>{" "}
    </div>
  );
}
