import React from "react";
import { Grid } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import VerifiedIcon from "@mui/icons-material/Verified";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import { lightGreen, amber, purple } from "@mui/material/colors";

import SummaryCard from "../../../Components/Card/summaryCard";

const iconCommonStyle = {
  width: 75,
  height: 75,
  color: "text.secondary",
};

const DATA = [
  {
    title: "Active Employee",
    icon: (
      <SupervisedUserCircleIcon
        sx={{ ...iconCommonStyle, color: purple[700] }}
      />
    ),
  },
  {
    title: "Available Employees (Today)",
    icon: <VerifiedIcon sx={{ ...iconCommonStyle, color: lightGreen[700] }} />,
  },
  {
    title: "Today Absentees",
    icon: <MoodBadIcon sx={{ ...iconCommonStyle, color: amber[700] }} />,
  },
];

const cards = DATA.slice(0, 3).map((item, index) => {
  return (
    <Grid item xs={4} md={4} key={index}>
      <SummaryCard title={item.title} icon={item.icon} />
    </Grid>
  );
});

const HomeSummaryCards = () => {
  return (
    <Grid container spacing={2} direction="row">
      {cards}
    </Grid>
  );
};

export default HomeSummaryCards;
