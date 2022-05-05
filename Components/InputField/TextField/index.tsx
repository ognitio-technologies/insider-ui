import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = (props: any) => {
  const {
    id,
    label,
    name,
    variant,
    inputProps,
    helperText,
    fullWidth = true,
    my = 0,
    ...other
  } = props;
  return (
    <MuiTextField
      id={id}
      label={label}
      variant={variant}
      inputProps={inputProps}
      helperText={helperText}
      fullWidth={fullWidth}
      sx={{ my: my }}
      {...other}
    />
  );
};

export default TextField;
