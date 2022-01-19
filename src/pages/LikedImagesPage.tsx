import React from "react";
import { LikedImagesList } from "../components/LikedImagesList/LikedImagesList";
import { Heading } from "@chakra-ui/react";

interface LikedImagesPageProps {}

export const LikedImagesPage: React.FC<LikedImagesPageProps> = () => {
  return (
    <div>
      <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
        Your Liked Images
      </Heading>
      <LikedImagesList />
    </div>
  );
};
