import React from "react";
import { useRouter } from "next/router";
import { _activeMainUrl } from "../../../../../../utils/activeUrl";

import { List, Stack } from "@mui/material";

import Card from "../../../../../../Components/Card";
import Typography from "../../../../../../Components/Typography";
import Link from "../../../../../../Components/Link";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { MAIN_NAVBAR_DATA } from "../../../../../../Data/Sidebar";

const SecondarySidebarNavigation = () => {
  const router = useRouter();
  const activeMainUrl = _activeMainUrl(router.pathname);

  const filteredMenu: any = MAIN_NAVBAR_DATA.find(
    (data) => data.mainMenu.toLowerCase() === activeMainUrl.substring(1)
  );

  const navbar = filteredMenu.subMenu.map((item: any, index: number) => {
    return (
      <Stack
        spacing={4}
        component={Link}
        href={item.url}
        noLinkStyle
        key={index}
        sx={{ my: 1 }}
      >
        <Stack direction={`row`} spacing={2} alignItems={`center`}>
          {item.icon}
          <Typography
            color="primary"
            variant="subtitle1"
            sx={{
              fontWeight: router.pathname === item.url && "bold",
              flexGrow: 1,
            }}
          >
            {item.label}
          </Typography>
          {router.pathname === item.url && (
            <FiberManualRecordIcon fontSize="small" sx={{ color: "green" }} />
          )}
        </Stack>
      </Stack>
    );
  });

  return (
    <List component="nav">
      <Card minHeight={450}>
        <Typography
          variant="h4"
          color="textSecondary"
          sx={{ mb: 2 }}
          gutterBottom
        >
          {filteredMenu.mainMenu}
        </Typography>
        {navbar}
      </Card>
    </List>
  );
};

export default SecondarySidebarNavigation;
