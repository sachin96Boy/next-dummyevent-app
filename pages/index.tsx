import { Box, Container } from "@chakra-ui/react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Box bgColor={"blackAlpha.400"} p={'2'} overflow="hidden">
      <Container>
        <EventList items={featuredEvents} />
      </Container>
    </Box>
  );
}
