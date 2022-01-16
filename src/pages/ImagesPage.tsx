import React from "react";
import { ImagesList } from "../components/ImagesList/ImagesList";

interface ImagesPageProps {}

export const ImagesPage: React.FC<ImagesPageProps> = () => {
  return (
    <div>
      images page
      <ImagesList />
    </div>
  );
};
