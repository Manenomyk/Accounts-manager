import React from 'react';
import * as nav from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

import './Navbar.css';

// import './Navbar.css';

function Navbar() {
    return ( 
        <div className='navsection'>

            <nav.Container sticky="top" className='' id='navcontainer'>
                <div className='logo'>
                    Logo

                </div>
                <div className='userdetail'>
                    <FaUserCircle className='navicon'/>
                    Hello, Client
                </div>
            </nav.Container>

        </div>
     );
}

export default Navbar;