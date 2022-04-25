import React from "react";
import { Box } from "@mui/system";

const DefaultBox = (props: any) => {
  const { children, ...other } = props;
  return (
    <Box sx={{ p: 2, m: 0 }} {...other}>
      {children}
    </Box>
  );
};

export default DefaultBox;
