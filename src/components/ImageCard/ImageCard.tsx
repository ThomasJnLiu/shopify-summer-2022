import React, { useState, useEffect } from "react";
import APODImage from "../../models/APODImage";
import { imagesActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Image, Text, Link, useToast } from "@chakra-ui/react";
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
  const toast = useToast();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => setIsLiked((active) => !active);
  const { date } = image;
  let shortenedDescription;
  if (image.explanation) {
    shortenedDescription = image.explanation.slice(0, 150) + "...";
  }

  const buttonStyle = isLiked ? "" : "not-liked";

  const sendLikeToast = (wasLiked: Boolean) => {
    toast({
      title: `Image ${wasLiked ? "unliked" : "liked"}!`,
      description: `${image.title} has been ${wasLiked ? "unliked" : "liked"}`,
      status: `${wasLiked ? "warning" : "success"}`,
      duration: 3000,
      variant: "subtle",
      isClosable: true,
    });
  };
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
      sendLikeToast(isLiked);
      dispatch(imagesActions.removeLikedImage({ image: image }));
    } else {
      sendLikeToast(isLiked);
      dispatch(imagesActions.addLikedImage({ image: image }));
    }
  };
  const shareHandler = () => {
    const shareUrl = showFullExplanation
      ? window.location.href
      : window.location.origin + "/images/" + image.date;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "The image link has been copied to your clipboard.",
      status: "info",
      duration: 3000,
      variant: "subtle",
    });
  };
  return (
    <Box className="image-card" mb={4} mt={2} boxShadow="xl">
      <Link href={`/images/${image.date}`}>
        <Image src={image.url} alt={image.title} />
      </Link>
      <Box p={5}>
        <Heading color="#5569CB" mt={1} mb={4}>
          <Link href={`/images/${image.date}`}>{image.title}</Link>
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
