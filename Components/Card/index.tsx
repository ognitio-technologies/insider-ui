import React from "react";
import MuiCard from "@mui/material/Card";
import { CardContent } from "@mui/material";

const Card = (props: any) => {
  const { width, minHeight, children, ...other } = props;
  return (
    <MuiCard sx={{ minHeight: minHeight, width: width, my: 2 }} {...other}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
