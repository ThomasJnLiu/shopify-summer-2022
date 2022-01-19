import { Heading } from "@chakra-ui/react";
import React from "react";
import { ImagesList } from "../components/ImagesList/ImagesList";
import { Sidebar } from "../components/Sidebar/Sidebar";

interface ImagesPageProps {}

export const ImagesPage: React.FC<ImagesPageProps> = () => {
  return (
    <div>
      <Sidebar />
      <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
        Images
      </Heading>
      <ImagesList />
    </div>
  );
};
