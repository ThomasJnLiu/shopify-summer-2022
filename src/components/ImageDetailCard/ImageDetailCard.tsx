import React, { useState } from "react";
import { useParams } from "react-router";
import APODImage from "../../models/APODImage";

interface ImageDetailCardProps {}

export const ImageDetailCard: React.FC<ImageDetailCardProps> = () => {
  const { imageDate } = useParams();
  const [imageDetail, setImageDetail] = useState<APODImage>();

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${imageDate}`
      );
      const data: APODImage = await res.json();
      setImageDetail(data);
    } catch (e) {
      console.error(e);
    }
  };

  return <>{imageDate}</>;
};
