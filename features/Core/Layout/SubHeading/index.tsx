import React from "react";
import { Box } from "@mui/system";
import Typography from "../../../../Components/Typography";

const SubHeading = (props: any) => {
  const { title, ...other } = props;
  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <Typography variant="h3" {...other} gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default SubHeading;
