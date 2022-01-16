import React from "react";
import APODImage from "../../models/APODImage";
interface ImageCardProps {
  image: APODImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.url} style={{ maxWidth: "500px" }} alt={image.title} />
      <button></button>
    </div>
  );
};
