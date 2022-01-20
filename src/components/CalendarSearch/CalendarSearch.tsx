import { Text, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarSearch.scss";
interface CalendarSearchProps {
  sendImageDate: (imageQuery: string) => void;
}

export const CalendarSearch: React.FC<CalendarSearchProps> = ({
  sendImageDate,
}) => {
  const [userDate, setUserDate] = useState<Date | null>(new Date());
  const currentDate = new Date();

  const formatDate = (dateObject: Date) => {
    // Add 0 if month is 1 digit for aesthetics
    let formattedMonth = (dateObject.getMonth() + 1).toString();
    if (formattedMonth.length < 2) {
      formattedMonth = "0" + formattedMonth;
    }
    const formattedDate =
      dateObject.getFullYear() +
      "-" +
      formattedMonth +
      "-" +
      dateObject.getDate();

    return formattedDate;
  };

  const currentFormattedDate = formatDate(currentDate);

  const dateHandler = (date: Date | null) => {
    if (date) {
      // Check if date is in future
      if (date > currentDate) {
        return;
      }
      setUserDate(date);
      sendImageDate(formatDate(date));
    }
  };

  useEffect(() => {
    sendImageDate(currentFormattedDate);
  }, [sendImageDate, currentFormattedDate]);

  return (
    <Box>
      <Text mb={4}>
        Use the calendar to search for a specific photo by date!{" "}
        <b>Please pick a date that is before {currentFormattedDate}.</b>
      </Text>

      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={userDate}
        onChange={(date) => dateHandler(date)}
      />
    </Box>
  );
};
