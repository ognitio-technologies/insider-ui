import React from "react";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { height } from "@mui/system";

const customStyle = {
  my: 1,
  boxShadow: "1px 1px 10px #cfd8dc",
  borderRadius: 3,
};

const Card = (props: any) => {
  const {
    width,
    height,
    minHeight,
    children,
    active = false,
    overflow = "hidden",
    ...other
  } = props;
  return (
    <MuiCard
      sx={{
        ...customStyle,
        width: width,
        minHeight: minHeight,
        height: height,
        overflow: overflow,

        backgroundColor: active && "primary.light",
      }}
      {...other}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
