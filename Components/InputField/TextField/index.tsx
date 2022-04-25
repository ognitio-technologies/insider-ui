import React from "react";
import MuiTextField from "@mui/material/TextField";

const TextField = (props: any) => {
  const { id, label, name, variant, inputProps, helperText, ...other } = props;
  return (
    <MuiTextField
      id={id}
      label={label}
      variant={variant}
      inputProps={inputProps}
      helperText={helperText}
      {...other}
      sx={{ my: 2 }}
    />
  );
};

export default TextField;
