import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoIosLogIn />,
    cName: "nav-text",
  },
  {
    title: "SignUp",
    path: "/signup",
    icon: <IoIcons.IoIosLogIn />,
    cName: "nav-text",
  },
  {
    title: "Cities",
    path: "/cities",
    icon: <FaIcons.FaRegBuilding />,
    cName: "nav-text",
  },

  {
    title: "Hotels",
    path: "/hotels",
    icon: <FaIcons.FaHotel />,
    cName: "nav-text",
  },
  {
    title: "Attracions",
    path: "/attractions",
    icon: <FaIcons.FaRegBuilding />,
    cName: "nav-text",
  },
];
