import { Grid, TextField, Button, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScheduleList from "./ScheduleList";
import {
  CHECKIN_TEST_ID,
  CHECKOUT_TEST_ID,
  NAME_TEST_ID,
  scheduleProps,
} from "./types";
import "./styles.css";

const IntialState = {
  name: "",
  checkIn: "",
  checkOut: "",
};

const InputForm = () => {
  const [state, setState] = useState({ ...IntialState });
  const [schedules, setSchedule] = useState<scheduleProps>({});
  const [isClick, setClick] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    setClick(true);
    const notValid = ["", null, "null", "NULL", undefined, "undefined"];
    const errors = Object.values(state).some((e) => notValid.includes(e));
    if (errors) {
      alert("All Fields are Required");
    } else {
      console.log(state);
      calculateSchedule(state.checkIn, state.checkOut);
    }
  };

  const calculateSchedule = (start: string, end: string) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    let diff =
      (endDate.getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24);

    const list = { ...schedules };

    for (let index = 0; index <= diff; index++) {
      let dateTimeStamp = new Date(startDate).setDate(
        new Date(startDate).getDate() + index
      );
      let scheduleDate = new Date(dateTimeStamp);
      let formattedDate = scheduleDate.toISOString().slice(0, 10);

      if (list[dateTimeStamp]) {
        if (!list[dateTimeStamp]["name"].includes(state.name)) {
          list[dateTimeStamp]["name"].push(state.name);
        }
      } else {
        list[dateTimeStamp] = {
          name: [state.name],
          date: formattedDate,
        };
      }
    }
    setSchedule(list);
  };

  return (
    <Container>
      <Grid container spacing={2} component={Paper} padding={2}>
        <Grid item xs={6} md={2}>
          <TextField
            type="text"
            label="Name"
            name="name"
            value={state.name}
            onChange={handleInput}
            size="small"
            data-testid={NAME_TEST_ID}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            type="date"
            label="Check In"
            name="checkIn"
            value={state.checkIn}
            onChange={handleInput}
            size="small"
            data-testid={CHECKIN_TEST_ID}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            type="date"
            label="Check Out"
            name="checkOut"
            value={state.checkOut}
            onChange={handleInput}
            size="small"
            data-testid={CHECKOUT_TEST_ID}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Button variant="outlined" onClick={onSubmit}>
            Schedule {isClick && "Clicked"}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} component={Paper} marginTop={3}>
        <ScheduleList list={schedules} />
      </Grid>
    </Container>
  );
};
export default InputForm;
