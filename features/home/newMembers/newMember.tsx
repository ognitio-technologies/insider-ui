import React from "react";
import { Box } from "@mui/system";
import { Avatar, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import Typography from "../../../Components/Typography";
import Card from "../../../Components/Card";
import Link from "../../../Components/Link";

import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";

const NewMember = (props: any) => {
  const { name, title, department } = props;
  return (
    <Card>
      <Grid container alignItems={`center`}>
        <Grid item xs>
          <Grid container justifyContent={`center`} alignItems={`center`}>
            <Grid item xs={2} md={1}>
              <Avatar></Avatar>
            </Grid>
            <Grid item xs={2} md={6}>
              <Typography variant="h4">{name} </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={2} md={5}>
              <Typography variant="subtitle1">{department} </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewMember;
