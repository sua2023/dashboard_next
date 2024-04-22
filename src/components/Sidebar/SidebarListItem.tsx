import { FaChartBar, FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IconUsers } from "../icons/icons";
import { FiUsers } from "react-icons/fi";

export const menuItems = [
  {
    href: "/dashboard",
    title: "Dashboard", 
    isLinkChild: false,
    icon: <RxDashboard />,
  },
  
  {
    title: "Manage users",
    isLinkChild: true,
    path: "users",
    icon: <IconUsers/>,
    children: [
      {
        href: "/users/staff",
        title: "Staff",
      },
      {
        href: "/users/customer",
        title: "Customer",
      },
    ],
  },
  {
    href: "/documents",
    title: "Documents", 
    isLinkChild: false,
    icon: <FaChartBar />,
  },
  {
    title: "Forms",
    isLinkChild: true,
    path: "forms",
    icon: <FaRegUser />,
    children: [
      {
        href: "/forms/form-layout",
        title: "Form-layout",
      },
      {
        href: "/forms/form-elements",
        title: "Form-elements",
      },
    ],
  },
];
