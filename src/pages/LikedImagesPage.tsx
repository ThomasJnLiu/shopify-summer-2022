import React from "react";
import { LikedImagesList } from "../components/LikedImagesList/LikedImagesList";

interface LikedImagesPageProps {}

export const LikedImagesPage: React.FC<LikedImagesPageProps> = () => {
  return (
    <div>
      liked images page
      <LikedImagesList />
    </div>
  );
};
