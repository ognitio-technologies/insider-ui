import React from "react";

import { Box } from "@mui/system";

import AppBar from "./AppBar";
import PrimarySidebar from "./Sidebar/PrimarySidebar";

const Layout = (props: any) => {
  const { children, heading } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <PrimarySidebar />
      <Box sx={{ width: "100%" }}>
        <AppBar heading={heading} />
        <Box sx={{ p: 1, m: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
