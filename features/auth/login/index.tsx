import React from "react";
import { Box, Stack } from "@mui/material";
import Card from "../../../Components/Card";
import Typography from "../../../Components/Typography";
import LoginForm from "./loginForm";
import RoundedLogo from "../../Core/Logo";

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card width={450} minHeight={500}>
        <Stack alignItems={`center`} spacing={2} sx={{ pt: 4 }}>
          <RoundedLogo>i</RoundedLogo>
          <Typography variant="h4" align="center">
            Login to continue
          </Typography>
          <Typography variant="subtitle1" align="center">
            Login with your employee id and password
          </Typography>
          <LoginForm />
        </Stack>
      </Card>
    </Box>
  );
};

export default Login;
