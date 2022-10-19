import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { RiSendPlaneFill  } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";

export const Sbarcontent = [
    {
        icon:<MdDashboardCustomize style={{fontSize:"25px", color:"blue" }} />,
        title: "Dashboard",
        link: "./Dashbord"
    },
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
    
] ;