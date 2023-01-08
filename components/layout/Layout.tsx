import { Box, calc } from "@chakra-ui/react";
import React from "react";
import MainHeader from "./MainHeader";

function Layout(props: any) {
  return (
    <>
      <MainHeader />
      <Box
        as={"main"}
        h={"calc(100vh-7rem)"}
        overflowY={"auto"}
        bgColor={"blackAlpha.400"}
      >
        {props.children}
      </Box>
    </>
  );
}

export default Layout;
