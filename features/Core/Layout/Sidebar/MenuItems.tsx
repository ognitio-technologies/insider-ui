import React, { Component } from "react";
import { useRouter } from "next/router";

import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "../../../../Components/Link/index";
import { SIDEBAR_MAIN_DATA, SIDEBAR_SUB_DATA } from "../../../../Data/Sidebar";

const MenuItems = (props: any) => {
  const { open } = props;
  const router = useRouter();
  return (
    <>
      <List>
        {SIDEBAR_MAIN_DATA.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.mainMenu}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {SIDEBAR_SUB_DATA.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            component={Link}
            href={item.url}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.mainMenu}
              sx={{ opacity: open ? 1 : 0, color: "text.secondary" }}
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default MenuItems;
