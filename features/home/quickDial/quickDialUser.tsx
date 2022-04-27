import React from "react";
import { Box } from "@mui/system";
import { Avatar, Grid, IconButton, Stack, Tooltip } from "@mui/material";
import Typography from "../../../Components/Typography";
import Card from "../../../Components/Card";
import Link from "../../../Components/Link";

import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";

const QuickDialUser = (props: any) => {
  const { name, title, phone } = props;
  return (
    <Card>
      <Grid container alignItems={`center`}>
        <Grid item xs>
          <Stack direction={`row`} spacing={2} alignItems={`center`}>
            <Avatar></Avatar>
            <Box>
              <Typography variant="h4">
                {name}{" "}
                <Tooltip title={title}>
                  <InfoIcon fontSize="small" sx={{ color: "grey.400" }} />
                </Tooltip>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {phone}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          <IconButton component={Link} href={`tel: ${phone}`} target="_blank">
            <CallIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default QuickDialUser;
