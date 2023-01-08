import { Box, Container } from "@chakra-ui/react";
import React from "react";

function EventContent(props: any) {
  return (
    <Box
      fontSize={"1.5reem"}
      color={"gray.700"}
      width="90%"
      maxW={"40em"}
      my="8rem"
      textAlign={"center"}
    >
      {props.children}
    </Box>
  );
}

export default EventContent;
