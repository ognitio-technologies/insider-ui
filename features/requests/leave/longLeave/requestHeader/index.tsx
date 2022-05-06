import React from "react";
import Card from "../../../../../Components/Card";
import Typography from "../../../../../Components/Typography";
import LongLeaveRequestHeaderForm from "./longLeaveRequestHeaderForm";

const LongLeaveRequestHeader = (props: any) => {
  return (
    <Card>
      <Typography>Add multiple leave with multiple entry</Typography>
      <LongLeaveRequestHeaderForm onSubmit={props.onSubmit} />
    </Card>
  );
};

export default LongLeaveRequestHeader;
