import { Box, SkeletonText } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { ImageCard } from "../ImageCard/ImageCard";
import "./ImagesList.scss";
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
    <Box className="images-list">
      {images.length > 0 ? (
        images.map((image) => {
          return <ImageCard image={image} key={image.date} />;
        })
      ) : (
        <>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        </>
      )}
    </Box>
  );
};
