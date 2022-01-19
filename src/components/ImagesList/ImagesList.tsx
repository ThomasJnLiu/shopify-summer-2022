import { Box, SkeletonText, Button, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { ImageCard } from "../ImageCard/ImageCard";
import "./ImagesList.scss";
interface ImagesListProps {}

export const ImagesList: React.FC<ImagesListProps> = () => {
  const [images, setImages] = useState<APODImage[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=10`
      );
      const data: APODImage[] = await res.json();
      setImages((prevImages) => {
        let newImages = prevImages;
        newImages = newImages.concat(data);
        return newImages;
      });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const loadMoreHandler = () => {
    fetchImages();
  };

  // fetch images from api
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Box className="images-list">
      {images.length > 0 ? (
        <>
          {images.map((image) => {
            return <ImageCard image={image} key={image.date} />;
          })}
          <Button
            onClick={loadMoreHandler}
            mt={5}
            mb={10}
            style={{
              width: "100%",
              backgroundColor: "#5569cb",
              color: "white",
            }}
          >
            {!isLoading ? "Load More Images" : <Spinner />}
          </Button>
        </>
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
