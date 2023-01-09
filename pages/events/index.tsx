import {  Container } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {
  const events = getAllEvents();
  const Router = useRouter();

  const onSearch = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    Router.push(fullPath);
  }
  return (
    <Container>
      <EventsSearch onSearch={onSearch}/>
      <EventList items={events} />
    </Container>
  )
}

export default AllEventsPage