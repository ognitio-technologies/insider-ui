import React from "react";
import ScrollBox from "../../../Components/Box/ScrollBox";
import Card from "../../../Components/Card";
import Typography from "../../../Components/Typography";

import QuickDialUser from "./quickDialUser";
import SeeAll from "../../Core/More/SeeAll";

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
      <Card height={380}>
        <ScrollBox height={360}>
          {quickDials}
          <SeeAll url="/reports/contacts" />
        </ScrollBox>
      </Card>
    </>
  );
};

export default QuickDial;
