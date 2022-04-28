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
import EventIcon from "@mui/icons-material/Event";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import AvTimerIcon from "@mui/icons-material/AvTimer";

import SendIcon from "@mui/icons-material/Send";

export const MAIN_NAVBAR_DATA = [
  {
    icon: <CottageIcon color="primary" />,
    mainMenu: "Home",
    url: "/",
    subMenu: [],
  },
  {
    icon: <OutboxIcon color="primary" />,
    mainMenu: "Requests",
    url: "/requests/leave/single",
    subMenu: [
      {
        label: "Leave Request",
        url: "/requests/leave/single",
        icon: <EventIcon color="primary" fontSize="small" />,
      },
      {
        label: "Long Leave Request",
        url: "/requests/leave/long",
        icon: <DateRangeIcon color="primary" fontSize="small" />,
      },
      {
        label: "Overtime Request",
        url: "/dashboard",
        icon: <MoreTimeIcon color="primary" fontSize="small" />,
      },
      {
        label: "Permission Request",
        url: "/dashboard",
        icon: <AvTimerIcon color="primary" fontSize="small" />,
      },
    ],
  },
  {
    icon: <ApprovalIcon color="primary" />,
    mainMenu: "Administration",
    url: "/administration",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <WorkspacesIcon color="primary" />,
    mainMenu: "Transactions",
    url: "/transactions",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AdminPanelSettingsIcon color="primary" />,
    mainMenu: "Masters",
    url: "/masters",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <SettingsIcon color="primary" />,
    mainMenu: "Settings",
    url: "/settings",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <AnalyticsIcon color="primary" />,
    mainMenu: "Reports",
    url: "/reports",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <LinkIcon color="primary" />,
    mainMenu: "Externals",
    url: "/externals",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];

export const INFORMATIONS_DATA = [
  {
    icon: <InfoIcon color="primary" />,
    mainMenu: "About",
    url: "/privacy",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PrivacyTipIcon color="primary" />,
    mainMenu: "Terms & Condition",
    url: "/terms-and-condition",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <PolicyIcon color="primary" />,
    mainMenu: "Privacy Policy",
    url: "/privacy-policy",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
  {
    icon: <HelpIcon color="primary" />,
    mainMenu: "Help",
    url: "/help",
    subMenu: [{ label: "Dashboard", url: "/dashboard" }],
  },
];
