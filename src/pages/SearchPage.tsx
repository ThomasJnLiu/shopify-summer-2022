import React, { useState, useCallback } from "react";
import { CalendarSearch } from "../components/CalendarSearch/CalendarSearch";
import APODImage from "../models/APODImage";
import { ImageCard } from "../components/ImageCard/ImageCard";
import { Heading, Box, SkeletonText } from "@chakra-ui/react";

interface SearchPageProps {}

export const SearchPage: React.FC<SearchPageProps> = () => {
  const [imageDetail, setImageDetail] = useState<APODImage | null>();

  const fetchImages = async (dateQuery: string) => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${dateQuery}`
      );
      const data: APODImage = await res.json();
      setImageDetail(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getImageDate = useCallback((date: string) => {
    setImageDetail(null);
    fetchImages(date);
  }, []);

  return (
    <>
      <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
        Search by Date
      </Heading>
      <CalendarSearch sendImageDate={getImageDate} />
      <Box mb={5} />
      {imageDetail ? (
        <>
          {imageDetail.title ? (
            <>
              <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
                {imageDetail.title}
              </Heading>
              <ImageCard image={imageDetail} showFullExplanation={true} />
            </>
          ) : (
            <>
              <Heading mt={10} mb={5} fontWeight={500} fontSize={"xl"}>
                Image Not Found
              </Heading>
            </>
          )}
        </>
      ) : (
        <>
          <Box padding="6" boxShadow="lg" bg="white" mb={4} mt={4}>
            <SkeletonText mt="4" noOfLines={10} spacing="4" />
          </Box>
        </>
      )}
    </>
  );
};
