import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";

function NewsletterRegistration() {
  function registrationHandler(event: any) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <Box as={"section"}  maxW={"40rem"}>
      <Heading as={"h3"} textAlign={"center"}>
        Sign up To Stay for the Latest
      </Heading>
      <Box as={"form"} onSubmit={registrationHandler}>
        <Box display={"flex"} gap={"2"}>
          <Input
            type={"email"}
            id={"email"}
            placeholder={"Your Email Address"}
            flex={"1"}
          />
          <Button colorScheme={"blackAlpha"} cursor={"pointer"}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsletterRegistration;
