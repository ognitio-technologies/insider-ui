import { Grid, Stack } from "@mui/material";
import React from "react";
import Layout from "../Core/Layout";
import NewMembers from "./newMembers";
import QuickDial from "./quickDial";
import HomeSummaryCards from "./summary";

const Home = () => {
  return (
    <Layout heading={`Overview`}>
      <Stack>
        <HomeSummaryCards />
        <Stack direction={`row`}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <QuickDial />
            </Grid>
            <Grid item xs={12} md={8}>
              <NewMembers />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
