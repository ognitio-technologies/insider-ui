import React from "react";
import { Box } from "@mui/system";
import Typography from "../../../../Components/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Toolbar } from "@mui/material";
import AccountMenu from "./AccountMenu";

const sAppBar = (props: any) => {
  const { heading } = props;
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <MuiAppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: 0 }}
      >
        <Toolbar>
          <Typography variant="h2" color="textSecondary" sx={{ flexGrow: 1 }}>
            {heading}
          </Typography>
          <AccountMenu />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default sAppBar;
