import { Stack } from "@mui/material";
import React from "react";
import Typography from "../../../../Components/Typography";
import RoundedLogo from "../../Logo/index";
import UserBasicInfoCard from "../../User/BasicInfoCard";

const SidebarHeader = () => {
  return (
    <Stack direction={`row`} alignItems={`center`} spacing={1} sx={{ mb: 1 }}>
      <RoundedLogo width={45} height={45}>
        i
      </RoundedLogo>
      <Typography variant="h3">iNSIDER</Typography>
    </Stack>
  );
};

export default SidebarHeader;
