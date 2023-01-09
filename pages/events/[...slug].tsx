import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import CustButton from "../../components/ui/CustButton";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  const filteredYear = filterData && filterData[0];
  const filteredMonth = filterData && filterData[1];

  const numYear = +`${filteredYear}`;
  const numMonth = +`${filteredMonth}`;

  const handleBackToAllEvents = () => {
    router.push("/events");
  };

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Box h={"100vh"}>
        <Flex align={"center"} justify="center" flexDirection={"column"}>
          <Box>
            <CustButton onClick={handleBackToAllEvents}>
              Back to All Events
            </CustButton>
          </Box>
          <Text fontWeight={"bold"} fontSize="24px" textAlign={"center"}>
            No events found for the chosen filter
          </Text>
        </Flex>
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
      <Box h="100vh">
        <Flex align={"center"} justify="center" flexDirection={"column"}>
          <Box>
            <CustButton onClick={handleBackToAllEvents}>
              Back to All Events
            </CustButton>
          </Box>
          <Text fontWeight={"bold"} fontSize="24px" textAlign={"center"}>
            Invalid Filter. Please adjust your values
          </Text>
        </Flex>
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
    <Box h="100vh">
      <Text fontWeight={"bold"} fontSize="24px" textAlign={"center"}>
        Filtered Events
      </Text>
      <Center>
        <EventList items={filteredEvents} />
      </Center>
    </Box>
  );
}

export default FilteredEventsPage;
