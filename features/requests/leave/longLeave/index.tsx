import React, { useState } from "react";

import Card from "../../../../Components/Card";
import Divider from "../../../../Components/Divider";

import Layout from "../../../Core/Layout";
import SecondaryLayout from "../../../Core/Layout/SecondaryLayout";
import LongLeaveRequestHeader from "./requestHeader";
import SubHeading from "../../../Core/Layout/SubHeading";
import LongLeaveRequestList from "./requestList";

interface ArrayProporties {
  startDate: Date;
  endDate: Date;
  leaveType: string;
  remark: string;
}

const LongLeaveRequest = () => {
  const [leaveData, setLeaveData] = useState<ArrayProporties[]>([]);

  const submitHandler = (data: any) => {
    setLeaveData([...leaveData, data]);
  };
  console.log("leaveData", leaveData);

  return (
    <Layout heading="Requests">
      <SecondaryLayout>
        <Card minHeight={450}>
          <SubHeading title="Long Leave Request" />
          <LongLeaveRequestHeader onSubmit={submitHandler} />
          {/* <Divider /> */}
          {leaveData.length > 0 && <LongLeaveRequestList data={leaveData} />}
        </Card>
      </SecondaryLayout>
    </Layout>
  );
};

export default LongLeaveRequest;
