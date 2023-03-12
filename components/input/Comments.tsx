import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

function Comments(props: any) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {
    // send data to API
  }
  return (
    <Box as={"section"} m="3rem" maxW={"40rem"} textAlign="center">
      <Button
        colorScheme={"blackAlpha"}
        onClick={toggleCommentsHandler}
        fontFamily="inherit"
        rounded={"2xl"}
        borderRadius="6px"
        p={"3"}
        background="transparent"
        color={"gray.600"}
        cursor="pointer"
      >
        {showComments ? "Hide" : "show"} Comments
      </Button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </Box>
  );
}

export default Comments;
