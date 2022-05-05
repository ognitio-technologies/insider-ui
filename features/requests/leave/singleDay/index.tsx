import { Box } from "@mui/system";
import React from "react";
import Card from "../../../../Components/Card";
import Layout from "../../../Core/Layout";
import SecondaryLayout from "../../../Core/Layout/SecondaryLayout";
import SubHeading from "../../../Core/Layout/SubHeading";
import LeaveRequestForm from "./leaveRequestForm";

const LeaveRequest = () => {
  const submitHandler = (data: any) => {
    console.log("ot request data", data);
  };

  return (
    <>
      <Layout heading="Requests">
        <SecondaryLayout>
          <Card minHeight={450}>
            <SubHeading title="Leave Request" />
            <LeaveRequestForm onSubmit={submitHandler} />
          </Card>
        </SecondaryLayout>
      </Layout>
    </>
  );
};

export default LeaveRequest;
