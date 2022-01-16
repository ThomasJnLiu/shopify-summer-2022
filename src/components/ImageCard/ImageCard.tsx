import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { imagesActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
interface ImageCardProps {
  image: APODImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => setIsLiked((active) => !active);
  const buttonText = isLiked ? "Unlike" : "Like";

  const { date } = image;
  const likedImages = useSelector(
    (state: { images: { likedImages: APODImage[] } }) =>
      state.images.likedImages
  );
  useEffect(() => {
    if (likedImages.some((storedImage) => storedImage.date === date)) {
      setIsLiked(true);
    }
  }, [likedImages, date]);

  const likeHandler = () => {
    handleToggle();
    if (isLiked) {
      dispatch(imagesActions.removeLikedImage({ image: image }));
      console.log("remove " + image.title + " to favourites");

      // localStorage.setItem("likedImages", JSON.stringify(likedImages));
    } else {
      dispatch(imagesActions.addLikedImage({ image: image }));
      console.log("add " + image.title + " to favourites");

      // localStorage.setItem("likedImages", JSON.stringify(likedImages));
    }
  };
  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.url} style={{ maxWidth: "500px" }} alt={image.title} />
      <button onClick={likeHandler}>{buttonText}</button>
    </div>
  );
};
