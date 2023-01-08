import Link from "next/link";
import React from "react";
import { Link as CustLink } from "@chakra-ui/react";

function CustButton(props: any) {
  return (
    <CustLink
      as={Link}
      href={props.link}
      textDecoration={"none"}
      cursor="pointer"
      bgColor={"gray.500"}
      borderWidth="medium"
      borderColor={"gray.300"}
      _hover={{ bgColor: "gray.600" }}
      _active={{ bgColor: "gray.700" }}
      _focus={{ boxShadow: "outline" }}
      borderRadius="lg"
      color={"white"}
      p={"1rem"}
      m={"1rem"}
      w={"100%"}
      textAlign={"center"}
    >
      {props.children}
    </CustLink>
  );
}

export default CustButton;
