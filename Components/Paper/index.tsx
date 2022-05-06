import React from "react";
import MuiPaper from "@mui/material/Paper";

const Paper = (props: any) => {
  const { children } = props;
  return (
    <MuiPaper
      elevation={0}
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        my: 1,
        p: 1,
        borderRadius: 2,
      }}
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
