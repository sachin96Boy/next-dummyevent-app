import { Box, calc } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

function Layout(props: any) {
  return (
    <>
      <MainHeader />
      <Box
        as={"main"}
        h={"calc(100vh-5rem)"}
        overflowY={"auto"}
        bgColor={"blackAlpha.400"}
      >
        {props.children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
