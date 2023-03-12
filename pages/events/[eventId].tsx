import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
// import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-details/EventContent";
import EventLogistics from "../../components/event-details/EventLogistics";
import EventSummery from "../../components/event-details/EventSummery";
import Comments from "../../components/input/Comments";
// import { getEventById } from "../../dummy-data";

function EventDetailPage(props: any) {
  // const router = useRouter();
  // const { eventId } = router.query;

  const { event } = props;

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
      <Comments eventId={event.id} />
    </Box>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(
    `${process.env.REACT_APP_REALTIME_DATABASE}/0/events.json`
  );
  const events = await res.data;
  const paths = events.map((event: any) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  let { params } = context;
  const { eventId } = params;
  const res = await axios.get(
    `${process.env.REACT_APP_REALTIME_DATABASE}/0/events.json`
  );
  const posts = await res.data;
  const event = posts.find((newEvent: any) => newEvent.id === eventId);

  return {
    // Passed to the page component as props
    props: { event },
    revalidate: 30,
  };
}

export default EventDetailPage;
