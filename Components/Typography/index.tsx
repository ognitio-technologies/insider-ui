import MuiTypography from "@mui/material/Typography";
import React from "react";

const Typography = (props: any) => {
  const { variant, children, ...other } = props;
  return (
    <MuiTypography variant={variant} {...other}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
