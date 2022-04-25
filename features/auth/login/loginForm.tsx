import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Box } from "@mui/system";
import Button from "../../../Components/Button";
import PasswordField from "../../../Components/InputField/PasswordField";
import TextField from "../../../Components/InputField/TextField";

const LoginForm = () => {
  type Inputs = {
    username: string;
    password: string;
  };
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        id="username"
        variant="outlined"
        placeholder="Username"
        fullWidth
        inputProps={{
          ...register("username", {
            required: "This field is required",
            minLength: { value: 4, message: "Min 4 letter required" },
            maxLength: { value: 140, message: "Max 140 letters allowed" },
          }),
        }}
        error={errors.username && true}
        helperText={errors.username && errors.username.message}
      />
      <PasswordField
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        inputProps={{
          ...register("password", {
            required: "This field is required",
            minLength: { value: 6, message: "Min 6 letter required" },
            maxLength: { value: 15, message: "Max 15 letters allowed" },
          }),
        }}
        error={errors.password && true}
        helperText={errors.password && errors.password.message}
      />
      <Box sx={{ py: 2, width: "100%" }}>
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
