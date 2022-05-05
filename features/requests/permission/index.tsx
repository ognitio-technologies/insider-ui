import React from "react";

import Card from "../../../Components/Card";
import Layout from "../../Core/Layout";
import SecondaryLayout from "../../Core/Layout/SecondaryLayout";
import SubHeading from "../../Core/Layout/SubHeading";

import PermissionRequestForm from "./permissionRequestForm";

const PermissionRequest = () => {
  const submitHandler = (data: any) => {
    console.log("ot request data", data);
  };

  return (
    <>
      <Layout heading="Requests">
        <SecondaryLayout>
          <Card minHeight={450}>
            <SubHeading title="Permission Request" />
            <PermissionRequestForm onSubmit={submitHandler} />
          </Card>
        </SecondaryLayout>
      </Layout>
    </>
  );
};

export default PermissionRequest;
