import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { Sbarcontent } from '../../Sbarcontent';

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
                        id={window.location.pathname == val.link ? "active" : ""}
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
            </div>
        </div>
     );
}

export default Sidebar;