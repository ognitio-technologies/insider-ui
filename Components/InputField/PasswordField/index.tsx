import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "../../Typography";

const PasswordField = (props: any) => {
  const {
    label,
    variant,
    inputProps,
    inputRef,
    id,
    error = false,
    helperText,
    fullWidth = true,
    my = 0,
    ...other
  } = props;
  const [showPassword, setShowPasswrod] = useState(false);

  const handleClickShowPassword = () => {
    setShowPasswrod(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl error={error} sx={{ my: my }} fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {variant !== "outlined" && (
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={id}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          inputProps={inputProps}
          inputRef={inputRef}
          {...other}
        />
      )}
      {variant === "outlined" && (
        <OutlinedInput
          id={id}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={id}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          inputProps={inputProps}
          inputRef={inputRef}
          {...other}
        />
      )}
      <Typography variant="caption" color="error">
        {helperText}
      </Typography>
    </FormControl>
  );
};

export default PasswordField;
