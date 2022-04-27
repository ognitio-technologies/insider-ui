import { Stack } from "@mui/material";
import React from "react";
import Card from "../../../../Components/Card";
import Typography from "../../../../Components/Typography";
import UserRoundedImage from "../Image";

const UserBasicInfoCard = () => {
  return (
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
  );
};

export default UserBasicInfoCard;
