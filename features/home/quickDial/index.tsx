import React from "react";
import Card from "../../../Components/Card";
import Typography from "../../../Components/Typography";
import QuickDialUser from "./quickDialUser";

const DATA = [
  { name: "User one", title: "title", phone: "+919447520986" },
  { name: "User one", title: "title", phone: "+919447520986" },
  { name: "User one", title: "title", phone: "+919447520986" },
  { name: "User one", title: "title", phone: "+919447520986" },
];

const quickDials = DATA.slice(0, 10).map((item, index) => {
  return (
    <QuickDialUser
      name={item.name}
      title={item.title}
      phone={item.phone}
      key={index}
    />
  );
});

const QuickDial = () => {
  return (
    <>
      <Typography variant="h4" color="textSecondary" sx={{ my: 2 }}>
        Quick Dials
      </Typography>
      <Card height={380} overflow={`auto`}>
        {quickDials}
      </Card>
    </>
  );
};

export default QuickDial;
