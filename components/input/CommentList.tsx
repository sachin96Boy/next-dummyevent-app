import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

function CommentList(props: any) {
  const { items } = props;
  return (
    <UnorderedList display={"flex"} flexDirection="column" gap={"1rem"}>
      {items.map((item: any) => (
        <ListItem
          key={item.id}
          textAlign={"left"}
          py="1rem"
          borderBottom={"2px solid #ccc"}
        >
          <Text>{item.text}</Text>
          <Box textAlign={"right"} fontStyle="italic">
            By{" "}
            <Text as={"address"} display="inline">
              {item.name}
            </Text>
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default CommentList;
