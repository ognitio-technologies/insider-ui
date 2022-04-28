import React from "react";

import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Card from "../../../../../Components/Card";

import UserBasicInfoCard from "../../../User/BasicInfoCard";
import PrimarySidebarHeader from "./Header/index";
import PrimarySidebarNavigation from "./Navigation/index";

const PrimarySidebar = () => {
  return (
    <Box sx={{ pl: 2, width: 350, minHeight: "100vh" }}>
      <Card>
        <Stack spacing={1}>
          <PrimarySidebarHeader />
          <UserBasicInfoCard />
          <PrimarySidebarNavigation />
        </Stack>
      </Card>
    </Box>
  );
};

export default PrimarySidebar;
