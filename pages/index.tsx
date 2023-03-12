import { Box, Container } from "@chakra-ui/react";
// import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
import axios from "axios";
import NewsletterRegistration from "../components/input/NewsletterRegistration";

export default function Home(props: any) {
  const { featuredEvents } = props;
  return (
    <Container>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </Container>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get(
    `${process.env.REACT_APP_REALTIME_DATABASE}/0/events.json`
  );
  const posts = await res.data;
  const featuredEvents = posts.filter((event: any) => event.isFeatured);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}
