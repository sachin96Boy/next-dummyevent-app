import React from "react";
import { ListItem, Image, Box, Heading, Flex } from "@chakra-ui/react";
import CustButton from "../ui/CustButton";
import { BsCalendarDate } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";

function EventItem(props: any) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <ListItem
      boxShadow={"md"}
      borderRadius={"xl"}
      overflow="hidden"
      bgColor={"white"}
      m={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"1px solid"}
    >
      <Image
        src={"/" + image}
        alt={title}
        w={"full"}
        fit={"cover"}
        h={"10rem"}
      />
      <Box w={"full"} px="1rem" textAlign={"center"}>
        <Box>
          <Heading as="h2" my={"0.5rem"}>
            {title}
          </Heading>

          <Box display={"flex"} gap={"0.5rem"} alignItems="center">
            <BsCalendarDate />
            <Box as="time" color={"gray.700"} fontWeight="black">
              {readableDate}
            </Box>
          </Box>
          <Box display={"flex"} gap={"0.5rem"} alignItems="center">
            <GoLocation />
            <Box as="address" my={"0.5rem"} color="gray.700" whiteSpace={"pre"}>
              {formattedAddress}
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent="center"
        >
          <CustButton link={exploreLink}>
            <Flex align="center" justify={"space-between"} gap={2}>
              Explore Event
              <FaLongArrowAltRight />
            </Flex>
          </CustButton>
        </Box>
      </Box>
    </ListItem>
  );
}

export default EventItem;
