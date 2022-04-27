import React from "react";

import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Card from "../../../../Components/Card";

import UserBasicInfoCard from "../../User/BasicInfoCard";
import SidebarHeader from "./sidebarHeader";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <Box sx={{ pl: 2, width: 350, minHeight: "100vh" }}>
      <Card>
        <Stack spacing={1}>
          <SidebarHeader />
          <UserBasicInfoCard />
          <Navigation />
        </Stack>
      </Card>
    </Box>
  );
};

export default Sidebar;
