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
    icon: <CottageIcon color="primary" />,
    mainMenu: "Home",
    url: "/",
    subMenu: [],
  },
  {
    icon: <OutboxIcon color="primary" />,
    mainMenu: "Requests",
    url: "",
    subMenu: [
      { label: "Leave Request", url: "/dashboard" },
      { label: "Overtime Request", url: "/dashboard" },
      { label: "Permission Request", url: "/dashboard" },
    ],
  },
  {
    icon: <ApprovalIcon color="primary" />,
    mainMenu: "Administration",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <WorkspacesIcon color="primary" />,
    mainMenu: "Transactions",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AdminPanelSettingsIcon color="primary" />,
    mainMenu: "Masters",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <SettingsIcon color="primary" />,
    mainMenu: "Settings",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AnalyticsIcon color="primary" />,
    mainMenu: "Reports",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <LinkIcon color="primary" />,
    mainMenu: "Externals",
    url: "/externals",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];

export const SIDEBAR_SUB_DATA = [
  {
    icon: <InfoIcon color="primary" />,
    mainMenu: "About",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PrivacyTipIcon color="primary" />,
    mainMenu: "Terms & Condition",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PolicyIcon color="primary" />,
    mainMenu: "Privacy Policy",
    url: "",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <HelpIcon color="primary" />,
    mainMenu: "Help",
    url: "/help",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];
