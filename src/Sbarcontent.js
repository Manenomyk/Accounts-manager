import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { RiSendPlaneFill  } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const Sbarcontent = [
    {
        icon:<AiOutlineUser style={{fontSize:"25px"}}/>,
        title: "Profile",
        link: "./Profile"
    },
    {
        icon:<RiSendPlaneFill style={{fontSize:"25px"}}/>,
        title: "Submit",
        link: "./Submit"
    },
    {
        icon:<BsFillCheckCircleFill style={{fontSize:"25px", color:"green"}} />,
        title: "Preview",
        link: "./Preview"
    },
    {
        icon:<BsCashCoin style={{fontSize:"25px", color:"gray"}}/>,
        title: "Payment",
        link: "./Payment"
    },
    {
        icon:<BiLogOut style={{fontSize:"25px"}} />,
        title: "Logout",
        link: "./Logout"
    },
] ;