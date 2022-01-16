import React from "react";
import { Route, Routes } from "react-router-dom";
import { ImagesPage } from "./pages/ImagesPage";
import { LikedImagesPage } from "./pages/LikedImagesPage";

function App() {
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
