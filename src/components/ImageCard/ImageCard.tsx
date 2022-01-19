import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { imagesActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import "./ImageCard.scss";
import { HeartMajor, ShareMinor } from "@shopify/polaris-icons";

interface ImageCardProps {
  image: APODImage;
  showFullExplanation?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  showFullExplanation,
}) => {
  ImageCard.defaultProps = {
    showFullExplanation: false,
  };
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => setIsLiked((active) => !active);
  const { date } = image;
  const shortenedDescription = image.explanation.slice(0, 150) + "...";

  const buttonStyle = isLiked ? "" : "not-liked";

  const likedImages = useSelector(
    (state: { images: { likedImages: APODImage[] } }) =>
      state.images.likedImages
  );
  useEffect(() => {
    if (likedImages.some((storedImage) => storedImage.date === date)) {
      setIsLiked(true);
    }
  }, [likedImages, date]);

  const likeHandler = () => {
    handleToggle();
    if (isLiked) {
      dispatch(imagesActions.removeLikedImage({ image: image }));
      console.log("remove " + image.title + " from favourites");
    } else {
      dispatch(imagesActions.addLikedImage({ image: image }));
      console.log("add " + image.title + " to favourites");
    }
  };
  const shareHandler = () => {
    navigator.clipboard.writeText(window.location.href + image.date);
  };
  return (
    <Box className="image-card" mt={4}>
      <Link href={`/${image.date}`}>
        <Image src={image.url} alt={image.title} />
      </Link>
      <Box p={5}>
        <Heading color="#5569CB" mt={1} mb={4}>
          <Link href={`/${image.date}`}>{image.title}</Link>
        </Heading>
        <Box className="image-card-body">
          <Text fontWeight={"bold"}>{image.date}</Text>
          <Text>
            {showFullExplanation ? (
              <>{image.explanation}</>
            ) : (
              <>{shortenedDescription}</>
            )}
          </Text>
        </Box>
        <button onClick={likeHandler} style={{ marginRight: "15px" }}>
          <HeartMajor className={buttonStyle} />
        </button>
        <button onClick={shareHandler}>
          <ShareMinor />
        </button>
      </Box>
    </Box>
  );
};
