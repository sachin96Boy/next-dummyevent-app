import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <Container>
      <EventList items={events} />
    </Container>
  )
}

export default AllEventsPage