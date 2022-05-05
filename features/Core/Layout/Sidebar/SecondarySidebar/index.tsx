import { Box } from "@mui/material";
import React from "react";
import SecondarySidebarNavigation from "./Navigation";

const SecondarySidebar = () => {
  return (
    <Box sx={{ pl: 2, width: 350 }}>
      <SecondarySidebarNavigation />
    </Box>
  );
};

export default SecondarySidebar;
