import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ImagesPage } from "./pages/ImagesPage";
import { LikedImagesPage } from "./pages/LikedImagesPage";

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
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<ImagesPage />} />
        <Route path="liked-images" element={<LikedImagesPage />} />
      </Routes>
    </div>
  );
}

export default App;
