import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";
import CustButton from "../ui/CustButton";

function EventsSearch(props: any) {
  const yearInputRef = React.useRef<HTMLSelectElement>(null);
  const monthInputRef = React.useRef<HTMLSelectElement>(null);
  
  const submitHandler = (event: any) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current!.value;
    const selectedMonth = monthInputRef.current!.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <Box
      as={"form"}
      my={"2rem"}
      boxShadow="md"
      p={"1rem"}
      bgColor="white"
      borderRadius={"6px"}
      maxW={"40rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
    >
      <Box w={"full"} display="flex" gap={"1rem"} flexDirection="column">
        <Box
          flex={1}
          display="flex"
          gap={"1rem"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <FormControl>
            <FormLabel htmlFor="year">Year</FormLabel>
            <Select id="year" name="year" ref={yearInputRef}>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Select>
          </FormControl>
        </Box>
        <Box
          flex={1}
          display="flex"
          gap={"1rem"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <FormControl>
            <FormLabel htmlFor="month">Month</FormLabel>
            <Select id="month" name="month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <CustButton onClick={submitHandler}>Find Events</CustButton>
    </Box>
  );
}

export default EventsSearch;
