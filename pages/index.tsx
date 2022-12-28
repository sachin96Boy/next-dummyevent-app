import { Container } from '@chakra-ui/react'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <Container>
        <EventList items={featuredEvents}/>
      </Container>
    </>
  )
}
