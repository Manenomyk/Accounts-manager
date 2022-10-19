import React from 'react';
import * as home from 'react-bootstrap';
import hom from '../Images/work.jpg';
import { AiOutlineCopyright } from "react-icons/ai";

import './Homepage.css';

function Homepage() {
    return ( 
        <div>

             <div className='navsection'>
                <home.Navbar bg="dark" variant="dark" sticky="top">
                    <home.Container>
                    <home.Navbar.Brand  style={{fontSize:"2rem"}}>LOGO </home.Navbar.Brand>
                    <home.Nav className="justify-content-end">
                        <home.Nav.Link href="/" style={{fontSize:"20px"}}>Home</home.Nav.Link>
                        <home.Nav.Link href="/Register" style={{fontSize:"20px"}}>Register</home.Nav.Link>
                        <home.Nav.Link href="/Login" style={{fontSize:"20px"}}>Login</home.Nav.Link>
                        {/* <home.Nav.Link href="#Contact" style={{fontSize:"20px"}}>Contact</home.Nav.Link> */}
                    </home.Nav>
                    </home.Container>
                </home.Navbar>
                <home.Container sticky="top" className='' id='navcontainer'>
                    <div className='logo'>
                        Logo

                    </div>
                    <div className='userdetail'>
                        
                    </div>
                </home.Container>

             </div>

            <home.Container className='image'>
                <home.Row className="mx-auto" >
                    <home.Col lg={12}>
                    <home.Image
                    src={hom} alt='single room'
                    // className="card-img-top, mb-3"
                    style={{ marginTop:"1rem", borderRadius:"12px", marginBottom:"1rem"}}
                    fluid
                    />
                    </home.Col>
                </home.Row>
                    
             </home.Container>

             <div className='navsection1'>
                Copyright <AiOutlineCopyright /> Bah.Dev 2022
             </div>
        </div>
     );
}

export default Homepage;