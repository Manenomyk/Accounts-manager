import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { RiSendPlaneFill  } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const Sbarcontent = [
    {
        icon:<AiOutlineUser/>,
        title: "Profile",
        link: "./Profile"
    },
    {
        icon:<RiSendPlaneFill />,
        title: "Submit",
        link: "./Submit"
    },
    {
        icon:<BsFillCheckCircleFill />,
        title: "Preview",
        link: "./Preview"
    },
    {
        icon:<BsCashCoin/>,
        title: "Payment",
        link: "./Payment"
    },
    {
        icon:<BiLogOut />,
        title: "Logout",
        link: "./Logout"
    },
] ;