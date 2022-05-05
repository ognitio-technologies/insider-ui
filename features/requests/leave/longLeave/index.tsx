import React from "react";

import Card from "../../../../Components/Card";
import Divider from "../../../../Components/Divider";

import Layout from "../../../Core/Layout";
import SecondaryLayout from "../../../Core/Layout/SecondaryLayout";
import LongLeaveRequestHeader from "./requestHeader";
import SubHeading from "../../../Core/Layout/SubHeading";

const LongLeaveRequest = () => {
  const submitHandler = (data: any) => {
    console.log("long leave data", data);
  };

  return (
    <Layout heading="Requests">
      <SecondaryLayout>
        <Card minHeight={450}>
          <SubHeading title="Long Leave Request" />
          <LongLeaveRequestHeader onSubmit={submitHandler} />
          <Divider />
        </Card>
      </SecondaryLayout>
    </Layout>
  );
};

export default LongLeaveRequest;
