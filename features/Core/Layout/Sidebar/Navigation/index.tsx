import React from "react";

import { useRouter } from "next/router";
import { List, Stack } from "@mui/material";

import Card from "../../../../../Components/Card";
import Typography from "../../../../../Components/Typography";
import Link from "../../../../../Components/Link";

import {
  SIDEBAR_MAIN_DATA,
  SIDEBAR_SUB_DATA,
} from "../../../../../Data/Sidebar";

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <List component="nav">
        {SIDEBAR_MAIN_DATA.map((item, index) => (
          <Card key={index} active={router.pathname === item.url}>
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
                sx={{ fontWeight: router.pathname === item.url && "bold" }}
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
          {SIDEBAR_SUB_DATA.map((item, index) => (
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

export default Navigation;
