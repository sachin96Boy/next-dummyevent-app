import React from "react";
import { ListItem, Image, Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

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
    <ListItem>
      <Image src={"/" + image} alt={title} />
      <Box>
        <Box>
          <Heading as="h2">{title}</Heading>
        </Box>
        <Box>
          <Box as="time">{readableDate}</Box>
        </Box>
        <Box>
          <Box as="address">{formattedAddress}</Box>
        </Box>
        <Box>
          <Link href={exploreLink}>Explore Event</Link>
        </Box>
      </Box>
    </ListItem>
  );
}

export default EventItem;
