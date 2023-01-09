import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
   
  const filteredYear = filterData && filterData[0];
  const filteredMonth = filterData && filterData[1];

  const numYear = +`${filteredYear}`;
  const numMonth = +`${filteredMonth}`;

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Box>
        <Text>No events found for the chosen filter</Text>
      </Box>
    );
  }

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Box>
        <Text>Invalid Filter. Please adjust your values</Text>
      </Box>
    );
  }

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
      <EventList items={filteredEvents} />
    </Container>
  );
}

export default FilteredEventsPage;
