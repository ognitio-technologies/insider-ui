import React from "react";
import Avatar from "@mui/material/Avatar";

const RoundedLogo = (props: any) => {
  const { width = 75, height = 75, children, ...other } = props;

  return (
    <Avatar sx={{ width: width, height: height }} {...other}>
      {children}
    </Avatar>
  );
};

export default RoundedLogo;
