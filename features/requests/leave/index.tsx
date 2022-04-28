import React from "react";
import Layout from "../../Core/Layout";
import SecondaryLayout from "../../Core/Layout/SecondaryLayout";
import { MAIN_NAVBAR_DATA } from "../../../Data/Sidebar/index";

const LeaveRequests = () => {
  return (
    <Layout heading="Requests">
      <SecondaryLayout>leave request form</SecondaryLayout>
    </Layout>
  );
};

export default LeaveRequests;
