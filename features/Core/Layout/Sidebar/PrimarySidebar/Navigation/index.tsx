import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { List, Stack } from "@mui/material";

import Card from "../../../../../../Components/Card";
import Typography from "../../../../../../Components/Typography";
import Link from "../../../../../../Components/Link";

import {
  MAIN_NAVBAR_DATA,
  INFORMATIONS_DATA,
} from "../../../../../../Data/Sidebar";
import { _activeMainUrl } from "../../../../../../utils/activeUrl";

const PrimarySidebarNavigation = () => {
  const router = useRouter();

  const activeMainUrl = _activeMainUrl(router.pathname);

  return (
    <>
      <List component="nav">
        {MAIN_NAVBAR_DATA.map((item, index) => (
          <Card key={index} active={activeMainUrl === item.url}>
            <Stack
              alignItems={`center`}
              direction="row"
              spacing={2}
              component={Link}
              href={item.url}
              noLinkStyle
            >
              {item.icon}
              <Typography
                color="primary"
                variant="subtitle1"
                sx={{ fontWeight: activeMainUrl === item.url && "bold" }}
              >
                {item.mainMenu}
              </Typography>
            </Stack>
          </Card>
        ))}
      </List>
      <List component="nav">
        <Card>
          <Typography gutterBottom>Informations & Support</Typography>
          {INFORMATIONS_DATA.map((item, index) => (
            <Stack
              spacing={4}
              component={Link}
              href={item.url}
              noLinkStyle
              key={index}
              sx={{ my: 1 }}
            >
              <Stack direction={`row`} spacing={2}>
                {item.icon}
                <Typography
                  color="primary"
                  variant="subtitle1"
                  sx={{ fontWeight: router.pathname === item.url && "bold" }}
                >
                  {item.mainMenu}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Card>
      </List>
    </>
  );
};

export default PrimarySidebarNavigation;
