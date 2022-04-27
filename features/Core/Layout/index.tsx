import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
      </Box>
      <div>{children}</div>;
    </>
  );
};

export default Layout;
