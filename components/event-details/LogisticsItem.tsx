import { Box, Flex, ListItem } from "@chakra-ui/react";
import React from "react";

function LogisticsItem(props: any) {
  const { icon, children } = props;
  return (
    <ListItem
      display={"flex"}
      fontSize="1.5rem"
      alignItems={"center"}
      flexDirection="column"
      textAlign={"center"}
      color={"white"}
    >
      <Flex align={"center"} justify={"space-between"}>
        {icon}
        <Box ml="1rem">{children}</Box>
      </Flex>
    </ListItem>
  );
}

export default LogisticsItem;
