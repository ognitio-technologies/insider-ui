import React from "react";
import Container from "@mui/material/Container";

import DefaultBox from "../../Components/Box/DefaultBox";
import Card from "../../Components/Card";
import Typography from "../../Components/Typography";

import FeedbackForm from "./feedbackForm";
import Head from "next/head";

const Feedback = () => {
  return (
    <>
      <Head>
        <title>Feedback form</title>
      </Head>
      <Container maxWidth="md">
        <DefaultBox>
          <Card sx={{ backgroundColor: "grey.50" }}>
            <Typography variant="h2" align="center" gutterBottom>
              Feedback Form
            </Typography>
            <FeedbackForm />
          </Card>
        </DefaultBox>
      </Container>
    </>
  );
};

export default Feedback;
