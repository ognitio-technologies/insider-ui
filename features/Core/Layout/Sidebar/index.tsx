import React from "react";
import { MenuItem, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Card from "../../../../Components/Card";
import UserBasicInfoCard from "../../User/BasicInfoCard";
import SidebarHeader from "./sidebarHeader";

const Sidebar = () => {
  return (
    <Box sx={{ pl: 2, width: 300, minHeight: "100vh" }}>
      <Card>
        <Stack spacing={4}>
          <SidebarHeader />
          <UserBasicInfoCard />
          <MenuItem />
        </Stack>
      </Card>
    </Box>
  );
};

export default Sidebar;
