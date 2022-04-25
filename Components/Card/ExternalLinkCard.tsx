import React from "react";
import { Card } from "@mui/material";
import Link from "../Link";

const ExternalLinkCard = (props: any) => {
  const { url, children, ...other } = props;
  return (
    <Link href={url} target="_blank" noLinkStyle>
      <Card
        sx={{
          width: 250,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        {...other}
      >
        {children}
      </Card>
    </Link>
  );
};

export default ExternalLinkCard;
