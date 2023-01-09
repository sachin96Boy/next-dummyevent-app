import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Box>
        <Text>Loading...</Text>
      </Box>
    );
  }
  return (
    <Container>
      <Text>Filtered Events</Text>
      <EventList items={filterData} />
    </Container>
  );
}

export default FilteredEventsPage;
