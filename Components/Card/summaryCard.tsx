import React from "react";
import { Grid } from "@mui/material";

import Card from "./index";
import Typography from "../Typography";

const SummaryCard = (props: any) => {
  const { minHeight = 125, title, icon } = props;
  return (
    <Card minHeight={minHeight}>
      <Grid container spacing={2} alignItems={`center`}>
        <Grid item xs>
          <Typography variant="h2">1000</Typography>
        </Grid>
        <Grid item>{icon}</Grid>
      </Grid>
      <Typography
        variant="h4"
        color="textSecondary"
        gutterBottom
        sx={{ pl: 1 }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default SummaryCard;
