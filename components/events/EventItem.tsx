import React from "react";
import { ListItem, Image, Box, Heading } from "@chakra-ui/react";
import CustButton from "../ui/CustButton";

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
      justifyContent={"center"}
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
            <Box as="time" color={"gray.700"} fontWeight="black">
              {readableDate}
            </Box>
          </Box>
          <Box display={"flex"} gap={"0.5rem"} alignItems="center">
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
          my={"1rem"}
        >
          <CustButton link={exploreLink}>Explore Event</CustButton>
        </Box>
      </Box>
    </ListItem>
  );
}

export default EventItem;
