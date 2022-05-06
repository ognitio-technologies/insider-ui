import React from "react";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";

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
    mt = 0,
    pt = 0,
    ...other
  } = props;
  return (
    <MuiCard
      sx={{
        ...customStyle,
        width: width,
        minHeight: minHeight,
        height: height,
        backgroundColor: active && "primary.light",
        mt: mt,
        pt: pt,
      }}
      {...other}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
