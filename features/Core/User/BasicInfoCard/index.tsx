import React from "react";

import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Card from "../../../../Components/Card";
import Typography from "../../../../Components/Typography";

import UserRoundedImage from "../Image";

const UserBasicInfoCard = () => {
  return (
    <Box sx={{ pb: 4 }}>
      <Card>
        <Stack direction={`row`} spacing={2} alignItems={`center`}>
          <UserRoundedImage />
          <Stack>
            <Typography variant="subtitle1">Username</Typography>
            <Typography variant="caption" color="textSecondary">
              title
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default UserBasicInfoCard;
