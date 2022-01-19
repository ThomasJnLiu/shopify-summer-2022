import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./Sidebar.scss";
import { Link } from "@chakra-ui/react";
interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box className="sidebar" mt={10}>
      <Heading size="md" mb={4} fontSize={"2xl"} fontWeight={500}>
        Welcome!
      </Heading>
      <Text mb={4}>
        Spacestagram is image sharing from the final frontier, featuring
        stunning photographs of the universe from NASA's APOD image API.
      </Text>
      <Text mb={4}>
        Users can like and share posts, all your likes are saved to local
        storage so you can access them whenever you come back!
      </Text>

      <Text>
        Created by Thomas Liu, access the repo{" "}
        <Link
          style={{ color: "#5569cb" }}
          href="https://github.com/ThomasJnLiu/shopify-summer-2022"
          isExternal
        >
          here.
        </Link>
      </Text>
    </Box>
  );
};
