import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Box,
  Spacer,
  HStack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ProfileMajor, SearchMajor } from "@shopify/polaris-icons";
import "./Header.scss";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      padding={3}
      bg="white"
      color="black"
      boxShadow="base"
      className="header"
    >
      <Container maxW="container.lg">
        <Flex justify="space-between">
          <Heading
            as="h1"
            size="lg"
            letterSpacing={"tighter"}
            fontWeight={"400"}
          >
            <Link to="/">Spacestagram</Link>
          </Heading>
          <HStack mr={4} spacing="24px">
            <Link to="liked-images">
              <SearchMajor />
            </Link>
            <Link to="liked-images">
              <ProfileMajor />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};
