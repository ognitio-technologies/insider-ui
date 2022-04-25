import MuiButton from "@mui/material/Button";
import React from "react";

const Button = (props: any) => {
  const { children, ...other } = props;
  return <MuiButton {...other}>{children}</MuiButton>;
};

export default Button;
