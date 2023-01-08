import { Box, Container } from "@chakra-ui/react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Box bgColor={"blackAlpha.400"} h="100vh" overflowY={"scroll"}>
      <Container>
        <EventList items={featuredEvents} />
      </Container>
    </Box>
  );
}
