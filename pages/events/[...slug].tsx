import { Box, Center, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import CustButton from "../../components/ui/CustButton";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage(props:any) {
  const router = useRouter();

  const {filteredEvents }= props

  const handleBackToAllEvents = () => {
    router.push("/events");
  };

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

  if (props.hasError) {
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

  // if (!filterData) {
  //   return (
  //     <Box>
  //       <Text>Loading...</Text>
  //     </Box>
  //   );
  // }

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

export async function getServerSideProps(context: any) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData && filterData[0];
  const filteredMonth = filterData && filterData[1];

  const numYear = +`${filteredYear}`;
  const numMonth = +`${filteredMonth}`;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound : true,
      // redirect: {
      //   destination: "/error"
      // }
    };
  }

  const res = await axios.get(`${process.env.REACT_APP_REALTIME_DATABASE}/0/events.json`);
  const posts = await res.data;

  let filteredEvents = posts.filter((event:any) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });


  return {
    props: {
      filteredEvents,
      numYear,
      numMonth
      
    }, // will be passed to the page component as props
  };
}

export default FilteredEventsPage;
