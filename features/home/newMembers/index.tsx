import React from "react";
import ScrollBox from "../../../Components/Box/ScrollBox";
import Card from "../../../Components/Card";
import Typography from "../../../Components/Typography";
import SeeAll from "../../Core/More/SeeAll";
import NewMember from "./newMember";

const DATA = [
  { name: "user1", title: "title1", department: "department1" },
  { name: "user1", title: "title1", department: "department1" },
  { name: "user1", title: "title1", department: "department1" },
  { name: "user1", title: "title1", department: "department1" },
  { name: "user1", title: "title1", department: "department1" },
  { name: "user1", title: "title1", department: "department1" },
];

const NewMembers = () => {
  const members = DATA.slice(0, 10).map((item, index) => {
    return (
      <NewMember
        name={item.name}
        title={item.title}
        department={item.department}
        key={index}
      />
    );
  });
  return (
    <>
      <Typography variant="h4" color="textSecondary" sx={{ my: 2 }}>
        New Members
      </Typography>
      <Card height={380} overflow={`auto`}>
        <ScrollBox height={360}>
          {members} <SeeAll url="/reports/members" />
        </ScrollBox>
      </Card>
    </>
  );
};

export default NewMembers;
