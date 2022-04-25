import CottageIcon from "@mui/icons-material/Cottage";
import OutboxIcon from "@mui/icons-material/Outbox";
import ApprovalIcon from "@mui/icons-material/Approval";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import HelpIcon from "@mui/icons-material/Help";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import PolicyIcon from "@mui/icons-material/Policy";
import InfoIcon from "@mui/icons-material/Info";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import LinkIcon from "@mui/icons-material/Link";

export const SIDEBAR_MAIN_DATA = [
  {
    icon: <CottageIcon />,
    mainMenu: "Home",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <OutboxIcon />,
    mainMenu: "Requests",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <ApprovalIcon />,
    mainMenu: "Administration",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <WorkspacesIcon />,
    mainMenu: "Transactions",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AdminPanelSettingsIcon />,
    mainMenu: "Masters",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <SettingsIcon />,
    mainMenu: "Settings",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AnalyticsIcon />,
    mainMenu: "Reports",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];

export const SIDEBAR_SUB_DATA = [
  {
    icon: <LinkIcon />,
    mainMenu: "Externals",
    url: "/externals",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <HelpIcon />,
    mainMenu: "Help",
    url: "/help",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PrivacyTipIcon />,
    mainMenu: "Terms & Condition",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PolicyIcon />,
    mainMenu: "Privacy Policy",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <InfoIcon />,
    mainMenu: "About",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];
