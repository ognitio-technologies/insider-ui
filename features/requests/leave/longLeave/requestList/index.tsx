import React from "react";
import { format } from "date-fns";

import { Grid, IconButton } from "@mui/material";
import Paper from "../../../../../Components/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LongLeaveRequestForm from "./longLeaveRequestForm";
import Typography from "../../../../../Components/Typography";
import Card from "../../../../../Components/Card";

const LongLeaveRequestList = (props: any) => {
  const { data, ...other } = props;
  return (
    <Card>
      <Typography gutterBottom>Content</Typography>
      {data.map((item: any, index: number) => (
        <Paper key={index}>
          <Grid container spacing={2} direction={`row`} sx={{ flexGrow: 1 }}>
            <Grid item xs={3}>
              {item.startDate && format(item.startDate, "dd/MM/yyyy")}
            </Grid>
            <Grid item xs={3}>
              {item.leaveType}
            </Grid>
            <Grid item xs={6}>
              {item.remark}
            </Grid>
          </Grid>
          <IconButton color="error">
            <DeleteOutlineIcon />
          </IconButton>
        </Paper>
      ))}
      <LongLeaveRequestForm />
    </Card>
  );
};

export default LongLeaveRequestList;
