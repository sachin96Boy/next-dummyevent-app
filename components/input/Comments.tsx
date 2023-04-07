import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import NewComment from "./NewComment";

function Comments(props: any) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    if(showComments){
      axios.get(
        `/api/comments/${eventId}`,
      ).then((response)=>{
        setComments(response.data.comments);
      }).catch((err)=>{
        return err;
      })
    }
  },[eventId, showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {
    // send data to API
    axios
      .post(
        `/api/comments/${eventId}`,
        {
          commentData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => {
        return err;
      });
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
      {showComments && <CommentList items={comments}/>}
    </Box>
  );
}

export default Comments;
