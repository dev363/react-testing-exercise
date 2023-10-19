import { Fragment, useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Chip,
  Stack,
} from "@mui/material";
import { scheduleObj, ScheduleListProps } from "./types";

const ScheduleList = ({ list }: ScheduleListProps) => {
  const [schedules, setSchedules] = useState<scheduleObj[]>([]);
  useEffect(() => {
    const items = Object.values(list);
    setSchedules(items);
  }, [list]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" data-testid="schedule-table-test-id">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules?.length > 0 ? (
            <Fragment>
              {schedules?.map((item, i) => (
                <TableRow key={i} data-testid="schedule-table-body-row-test-id">
                  <TableCell data-testid="schedule-date">{item.date}</TableCell>
                  <TableCell data-testid="schedule-name">
                    <Stack direction="row" spacing={1}>
                      {item?.name?.map((name: string, j) => {
                        return (
                          <Chip
                            size="small"
                            label={name}
                            variant="outlined"
                            key={j}
                            clickable
                          />
                        );
                      })}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </Fragment>
          ) : (
            <TableRow>
              <TableCell colSpan={2}>No Schedule</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ScheduleList;
