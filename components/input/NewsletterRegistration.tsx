import { Box, Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef } from "react";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    axios
      .post(
        "/api/newsletter",
        {
          email: enteredEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response.data));
  }

  return (
    <Box as={"section"} maxW={"40rem"}>
      <Heading as={"h3"} textAlign={"center"}>
        Sign up To Stay for the Latest
      </Heading>
      <Box as={"form"} onSubmit={registrationHandler}>
        <Box display={"flex"} gap={"2"}>
          <Input
            type={"email"}
            id={"email"}
            ref={emailInputRef}
            placeholder={"Your Email Address"}
            flex={"1"}
          />
          <Button colorScheme={"blackAlpha"} cursor={"pointer"} type={"submit"}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsletterRegistration;
