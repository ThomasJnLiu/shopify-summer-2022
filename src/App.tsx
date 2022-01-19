import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ImagesPage } from "./pages/ImagesPage";
import { LikedImagesPage } from "./pages/LikedImagesPage";
import { useDispatch } from "react-redux";
import { imagesActions } from "./store/index";
import { Container } from "@chakra-ui/react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { ImagesDetailPage } from "./pages/ImagesDetailPage";

function App() {
  const dispatch = useDispatch();

  // Check for exsiting likes in localStorage, writes to store if found
  useEffect(() => {
    let localStorageLikedImages;
    if (localStorage.getItem("likedImages") !== null) {
      localStorageLikedImages = JSON.parse(
        localStorage.getItem("likedImages") || "{}"
      );
    }

    if (!localStorageLikedImages || localStorageLikedImages.length === 0) {
      console.log("no liked images found...");
    } else {
      console.log("found liked images");
      dispatch(
        imagesActions.setLikedImages({
          localStorageLikedImages: localStorageLikedImages,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Container maxW="container.sm">
        <Routes>
          <Route path="" element={<ImagesPage />} />
          <Route path="liked-images" element={<LikedImagesPage />} />
          <Route path=":imageDate" element={<ImagesDetailPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
