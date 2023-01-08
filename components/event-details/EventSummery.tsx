import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

function EventSummery(props: any) {
  const { title } = props;
  return (
    <Box
      w={"full"}
      height="30vh"
      bgColor={"blackAlpha.500"}
      boxShadow={"2xl"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading as="h1" size="2xl" color="white" textAlign="center" mt="8rem">
        {title}
      </Heading>
    </Box>
  );
}

export default EventSummery;
