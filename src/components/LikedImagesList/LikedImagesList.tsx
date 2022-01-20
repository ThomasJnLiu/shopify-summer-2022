import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APODImage from "../../models/APODImage";
import { ImageCard } from "../ImageCard/ImageCard";
import NoLikesImage from "../../img/no-likes.png";
import { Center, Heading, Image, Text } from "@chakra-ui/react";

interface LikedImagesListProps {}

export const LikedImagesList: React.FC<LikedImagesListProps> = () => {
  const [likedImages, setLikedImages] = useState<APODImage[]>([]);

  const selectImages = (state: { images: { likedImages: APODImage[] } }) =>
    state.images.likedImages;
  const storeImages = useSelector(selectImages);

  useEffect(() => {
    setLikedImages(storeImages);
  }, [storeImages]);

  return (
    <>
      {likedImages.length > 0 ? (
        <div className="images-list">
          {likedImages.map((image) => {
            return <ImageCard image={image} key={image.date} />;
          })}
        </div>
      ) : (
        <div>
          <Center>
            <div style={{ color: "#646464", textAlign: "center" }}>
              <Image src={NoLikesImage} alt="No liked images" margin={"auto"} />
              <Heading fontWeight={300} fontSize={"3xl"} mb={4}>
                No Liked Images
              </Heading>
              Go to the home page and like some images!
            </div>
          </Center>
        </div>
      )}
    </>
  );
};
