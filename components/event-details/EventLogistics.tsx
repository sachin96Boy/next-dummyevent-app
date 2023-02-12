import {
  Box,
  Container,
  Image as ImageBox,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import LogisticsItem from "./LogisticsItem";

import { BsCalendarDate } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function EventLogistics(props: any) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");

  return (
    <Box
      boxShadow={"lg"}
      borderRadius="lg"
      overflow="hidden"
      bgColor={"gray.800"}
      p="2rem"
      maxW={"50rem"}
      w="80%"
      my={"2rem"}
      color={"white"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"1rem"}
      justifyContent={"space-between"}
    >
      <Box
        w={"10rem"}
        h={"10rem"}
        borderRadius={"50%"}
        overflow="hidden"
        border={"5px solid"}
        borderColor={"gray.400"}
      >
        <ImageBox
          // as={Image}
          objectFit={"cover"}
          w="10rem"
          h={"10rem"}
          src={"/" + image}
          alt={imageAlt}
        />
      </Box>
      <UnorderedList
        flex={"3"}
        display={"flex"}
        gap={"2rem"}
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
      >
        <LogisticsItem icon={<BsCalendarDate />}>
          <Box as="time">{humanReadableDate}</Box>
        </LogisticsItem>
        <LogisticsItem icon={<GoLocation />}>
          <Box as="address" whiteSpace={"pre"}>
            {formattedAddress}
          </Box>
        </LogisticsItem>
      </UnorderedList>
    </Box>
  );
}

export default EventLogistics;
