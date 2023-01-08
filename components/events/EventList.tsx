import React from "react";
import { UnorderedList } from "@chakra-ui/react";
import EventItem from "./EventItem";

function EventList(props: any) {
  const { items } = props;
  return (
    <UnorderedList w={"90%"} maxW={"40rem"}>
      {items.map((event: any) => (
        <EventItem key={event.id} {...event} />
      ))}
    </UnorderedList>
  );
}

export default EventList;
