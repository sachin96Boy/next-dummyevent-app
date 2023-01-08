import { Box, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-details/EventContent";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventSummery from "../../components/event-details/EventSummery";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId as string);

  if (!event) {
    return (
      <Box>
        <Text>Event not found</Text>
      </Box>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="space-between"
      bgGradient={"linear(to-r, gray.400,white)"}
    >
      <EventSummery title={event?.title} />
      <EventLogistics
        date={event?.date}
        address={event?.location}
        image={event?.image}
        imageAlt={event?.title}
      />
      <EventContent>
        <Text fontWeight={"bold"}>{event?.description}</Text>
      </EventContent>
    </Box>
  );
}

export default EventDetailPage;
