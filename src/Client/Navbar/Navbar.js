import React from 'react';
import * as nav from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

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
                    <BiUserCircle className='navicon'/>
                    Hello, Client
                </div>
            </nav.Container>

        </div>
     );
}

export default Navbar;