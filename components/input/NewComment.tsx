import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function NewComment(props: any) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  function sendCommentHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredComment = commentInputRef.current?.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <Box
      as={"form"}
      w={"full"}
      borderRadius={"6px"}
      padding="1rem"
      boxShadow={"lg"}
    >
      <Box className="row" display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
        <FormControl>
          <FormLabel
            htmlFor="email"
            display={"block"}
            fontWeight={"bold"}
            textAlign={"left"}
            mb={"0.5"}
          >
            Email Address
          </FormLabel>
          <Input type={"email"} id="email" ref={emailInputRef} />
        </FormControl>
        <FormControl>
          <FormLabel
            display={"block"}
            fontWeight={"bold"}
            textAlign={"left"}
            mb={"0.5"}
            htmlFor="name"
          >
            UserName
          </FormLabel>
          <Input type={"name"} id="name" ref={nameInputRef} />
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel
          display={"block"}
          fontWeight={"bold"}
          textAlign={"left"}
          mb={"0.5"}
          htmlFor="comment"
        >
          User Comment
        </FormLabel>
        <Textarea id="name" rows={5} ref={commentInputRef} />
      </FormControl>
      {isInvalid && <Text>Please enter a valid email and a Comment</Text>}
      <Button my={2}>Submit Content</Button>
    </Box>
  );
}

export default NewComment;
