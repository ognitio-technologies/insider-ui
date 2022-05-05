import React from "react";

import { Box } from "@mui/system";
import SecondarySidebar from "../Sidebar/SecondarySidebar";

const SecondaryLayout = (props: any) => {
  const { children } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <SecondarySidebar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ p: 1, mx: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default SecondaryLayout;
