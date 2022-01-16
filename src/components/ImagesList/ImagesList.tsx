import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { ImageCard } from "../ImageCard/ImageCard";

interface ImagesListProps {}

export const ImagesList: React.FC<ImagesListProps> = () => {
  const [images, setImages] = useState<APODImage[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=10`
      );
      const data: APODImage[] = await res.json();
      setImages(data);
    } catch (e) {
      console.error(e);
    }
  };

  // fetch images from api
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {images.map((image) => {
        return <ImageCard image={image} key={image.date} />;
      })}
    </>
  );
};
