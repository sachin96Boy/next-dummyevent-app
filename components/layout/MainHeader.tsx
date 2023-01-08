import {
  Box,
  ListItem,
  UnorderedList,
  Link as CustLink,
} from "@chakra-ui/react";
import nextLink from "next/link";
import React from "react";

function MainHeader() {
  return (
    <Box
      as={"header"}
      w="full"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"baseline"}
      py="1rem"
      px={"10%"}
      bgColor={"gray.600"}
      h="5rem"
      top={0}
      position="sticky"
      zIndex={"sticky"}
    >
      <Box
        fontSize={"1.5rem"}
        fontWeight={"black"}
        color="white"
        h={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <CustLink as={nextLink} href={"/"} textDecoration={
            "none"
        } _hover={{
            textDecoration: "none",
        }}>
          Sachin96Boy Dummy Blog
        </CustLink>
      </Box>
      <Box as={"nav"}>
        <UnorderedList listStyleType={"none"}>
          <ListItem border={"1px solid"} borderColor="white" _hover={{
                borderColor: "gray.500",
          }} padding={"0.8rem"}>
            <CustLink
              as={nextLink}
              textDecoration={"none"}
              _hover={{
                textDecoration: "none",
              }}
              fontSize="1rem"
              color="white"
              fontWeight={"bold"}
              href={"/events"}
            >
              Browse All
            </CustLink>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default MainHeader;
