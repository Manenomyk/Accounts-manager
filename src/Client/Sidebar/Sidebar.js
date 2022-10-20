import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { Sbarcontent } from '../../Sbarcontent';
import { MdLogout } from "react-icons/md";

import './Sidebar.css';

function Sidebar() {
    return ( 
        <div>
           
            <div className='sbar'>
                <ul className='list'>
                     {Sbarcontent.map((val,key)=>{
                    return (
                        <li key={key} 
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={()=>{window.location.pathname = val.link}}> 

                        <div id='icon'>
                        {val.icon}
                        </div>
                          <div id='title'>
                              {val.title}
                          </div>
                        
                        </li> 
                    );
                     
                    })}
                </ul>
                <div className='log'>
                
                    <h5> <MdLogout id='logouticon' />Logout</h5>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;