import React from "react";
import LongLeaveRequestHeaderForm from "./longLeaveRequestHeaderForm";

const LongLeaveRequestHeader = (props: any) => {
  return <LongLeaveRequestHeaderForm onSubmit={props.onSubmit} />;
};

export default LongLeaveRequestHeader;
