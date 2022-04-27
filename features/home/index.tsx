import { Stack } from "@mui/material";
import React from "react";
import Layout from "../Core/Layout";
import HomeSummaryCards from "./summary";

const Home = () => {
  return (
    <Layout heading={`Overview`}>
      <Stack>
        <HomeSummaryCards />
      </Stack>
    </Layout>
  );
};

export default Home;
