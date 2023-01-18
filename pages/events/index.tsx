import {  Container } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data'

function AllEventsPage(props:any) {
  const { allEvents } = props;
  const Router = useRouter();

  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    Router.push(fullPath);
  }
  return (
    <Container>
      <EventsSearch onSearch={onSearch}/>
      <EventList items={allEvents} />
    </Container>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get(`${process.env.REACT_APP_REALTIME_DATABASE}/0/events.json`);
  const allEvents = await res.data;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allEvents,
    },
  }
}

export default AllEventsPage