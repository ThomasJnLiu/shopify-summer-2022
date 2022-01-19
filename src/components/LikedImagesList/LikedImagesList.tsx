import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APODImage from "../../models/APODImage";
import { ImageCard } from "../ImageCard/ImageCard";
interface LikedImagesListProps {}

export const LikedImagesList: React.FC<LikedImagesListProps> = () => {
  const [likedImages, setLikedImages] = useState<APODImage[]>([]);

  const selectImages = (state: { images: { likedImages: APODImage[] } }) =>
    state.images.likedImages;
  const storeImages = useSelector(selectImages);
  console.log(storeImages);

  useEffect(() => {
    setLikedImages(storeImages);
  }, [storeImages]);

  return (
    <>
      {likedImages.length > 0 ? (
        <div className="images-list">
          {likedImages.map((image) => {
            return <ImageCard image={image} />;
          })}
        </div>
      ) : (
        <div>
          <p>Go to the home page and like some images!</p>
        </div>
      )}
    </>
  );
};
