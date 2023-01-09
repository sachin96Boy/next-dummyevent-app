import Link from "next/link";
import React from "react";
import { Button, Link as CustLink } from "@chakra-ui/react";

function CustButton(props: any) {
  if (props.link) {
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

  return (
    <Button
      colorScheme={"gray"}
      border="1px solid"
      borderColor={"gray.200"}
      borderRadius="6px"
      color={"white"}
      p={"1rem"}
      m={"1rem"}
      w={"100%"}
      textAlign={"center"}
      cursor="pointer"
      bgColor={"gray.500"}
      _hover={{ bgColor: "gray.600" }}
      _active={{ bgColor: "gray.700" }}
      _focus={{ boxShadow: "outline" }}
      boxShadow={"md"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default CustButton;
