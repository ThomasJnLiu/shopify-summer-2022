import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import APODImage from "../models/APODImage";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { Heading, Box, SkeletonText } from "@chakra-ui/react";

interface ImagesDetailPageProps {}

export const ImagesDetailPage: React.FC<ImagesDetailPageProps> = () => {
  const { imageDate } = useParams();
  const [imageDetail, setImageDetail] = useState<APODImage>();

  useEffect(() => {
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

    fetchImages();
  }, [imageDate]);
  return (
    <>
      {imageDetail ? (
        <>
          <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
            {imageDetail?.title}
          </Heading>
          <ImageCard image={imageDetail} showFullExplanation={true} />
        </>
      ) : (
        <>
          {" "}
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        </>
      )}
    </>
  );
};
