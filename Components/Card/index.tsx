import React from "react";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";

const Card = (props: any) => {
  const { width, minHeight, children, active = false, ...other } = props;
  return (
    <MuiCard
      sx={{
        minHeight: minHeight,
        width: width,
        my: 1,
        boxShadow: "1px 1px 10px #cfd8dc",
        borderRadius: 3,
        backgroundColor: active && "primary.light",
      }}
      {...other}
    >
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
