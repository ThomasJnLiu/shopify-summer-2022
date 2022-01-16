import { createSlice, configureStore } from "@reduxjs/toolkit";
import APODImage from "../models/APODImage";

interface LikedImagesState {
  likedImages: APODImage[];
}
const initialImagesState: LikedImagesState = { likedImages: [] };

const imagesSlice = createSlice({
  name: "images",
  initialState: initialImagesState,
  reducers: {
    setLikedImages(state, action) {
      state.likedImages = action.payload.localStorageLikedImages;
    },
    addLikedImage(state, action) {
      if (
        state.likedImages.some(
          (image) => image.date === action.payload.image.date
        )
      ) {
        console.log("image already liked");
      } else {
        state.likedImages.push(action.payload.image);
      }
    },
    removeLikedImage(state, action) {
      state.likedImages = state.likedImages.filter(
        (image) => image.date !== action.payload.image.date
      );
    },
  },
});

const store = configureStore({ reducer: { images: imagesSlice.reducer } });

// Updates localStorage when store is changed
store.subscribe(() => {
  const likedImages = store.getState().images.likedImages;
  localStorage.setItem("likedImages", JSON.stringify(likedImages));
});

export default store;

export const imagesActions = imagesSlice.actions;
