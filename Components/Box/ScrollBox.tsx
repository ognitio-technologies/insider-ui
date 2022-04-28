import React from "react";
import { Box } from "@mui/system";

const customStyle = {
  overflow: "hidden",
  width: "100%",
  px: 1,
  "&:hover": {
    zIndex: 1,
    overflow: "auto",
    boxShadow: "5px -5px 25px 5px #fafafa",
    borderRadius: 5,
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      borderRadius: 5,
    },
  },
};

const ScrollBox = (props: any) => {
  const { height, children } = props;
  return (
    <Box
      sx={{
        ...customStyle,
        height: height,
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollBox;
