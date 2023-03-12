import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function CommentList() {
  return (
    <UnorderedList display={"flex"} flexDirection="column" gap={"1rem"}>
      <ListItem textAlign={"left"} py="1rem" borderBottom={"2px solid #ccc"}>
        <Text>My first Comment</Text>
        <Box textAlign={"right"} fontStyle="italic">
          By{" "}
          <Text as={"address"} display="inline">
            Sachin96Boy
          </Text>
        </Box>
      </ListItem>
      <ListItem textAlign={"left"} py="1rem" borderBottom={"2px solid #ccc"}>
        <Text>My first Comment</Text>
        <Box textAlign={"right"} fontStyle="italic">
          By{" "}
          <Text as={"address"} display="inline">
            Sachin96Boy
          </Text>
        </Box>
      </ListItem>
    </UnorderedList>
  );
}

export default CommentList;
