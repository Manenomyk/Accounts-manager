import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import * as pro from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";

import './Profile.css';
function Profile() {
    return ( 
        <div>
            <Navbar />
            <div id='pro'>
                <Sidebar />

                <pro.Container>
                    <pro.Row className="mb-5">
                        <pro.Col md={8} id='proContent'>
                            <div id='top'>
                                <h3>Edit Profile</h3>
                                <IoMdContact id='proicon'/>
                                </div>


                                <div className='prodetails'>
                                    <div id='names'>
                                    First Name
                                    </div>
                                    <input type="text" id='inputs'/>
                                    <div id='names'>
                                    Last Name
                                    </div>
                                    <input type="text" id='inputs' />
                                    <div id='names'>
                                    Email
                                    </div>
                                    <input type="email" id='inputs' />
                                    <div id='names'>
                                    Phone Number
                                    </div>
                                    <input type="text" id='inputs' />
                                    <div id='names'>
                                    Id Number
                                    </div>
                                    <input type="text" id='inputs' />
                                </div>


                                <div  id='btn'>
                                    <div>
                                        <button  id='cancel'>Cancel</button>
                                    </div>
                                    <div>
                                        <button id='update'>Update</button>
                                    </div>
                                    
                                </div>
                        </pro.Col>
                    </pro.Row>
                </pro.Container>
            </div>
            
        </div>
     );
}

export default Profile;