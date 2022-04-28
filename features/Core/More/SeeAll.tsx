import React from "react";
import { Stack } from "@mui/material";
import Link from "../../../Components/Link";
import Typography from "../../../Components/Typography";

const SeeAll = (props: any) => {
  const { content = "See All", url } = props;
  return (
    <Stack alignItems={`center`}>
      <Typography variant="caption" noLinkStyle component={Link} href={url}>
        {content}
      </Typography>
    </Stack>
  );
};

export default SeeAll;
