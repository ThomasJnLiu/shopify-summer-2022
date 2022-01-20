import { Heading } from "@chakra-ui/react";
import React from "react";

interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <Heading size="md" mb={4} fontSize={"2xl"} fontWeight={500} mt={10}>
      Page Not Found
    </Heading>
  );
};
