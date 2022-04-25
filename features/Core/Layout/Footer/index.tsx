import { Box } from "@mui/system";
import React from "react";
import Copyright from "../../Copyright";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "common.white", p: 2, mt: 2 }}>
      <Copyright />
    </Box>
  );
};

export default Footer;
