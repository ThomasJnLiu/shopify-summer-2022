import React, { useState, useEffect } from "react";

function App() {
  const fetchImages = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=10`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // fetch images from api
  useEffect(() => {
    fetchImages();
  }, []);
  return <div className="App"></div>;
}

export default App;
