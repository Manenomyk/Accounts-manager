import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import * as sub from "react-bootstrap";
import { GrAdd } from "react-icons/gr";


import './Submit.css';

function Submit() {
    return ( 
        <div>
            <Navbar />
            <div className='Subbody'>
            <Sidebar />

            <sub.Container className='mt-3 pt-3' id='subcont' >
                
            <button className='btn btn-danger mb-4' id='Addbtn'> <GrAdd id='subicon'/>Add Question</button>
                <sub.Row>
                    <sub.Col lg={7}>
                        <sub.Card className='card'>
                            Question
                            
                            <input type="text" className='input' />
                            
                        </sub.Card>
                    </sub.Col>
                    <sub.Col lg={2}>
                        <sub.Card>
                            Date
                    
                            <input type="date" className='input'/>
                            
                        </sub.Card>
                    </sub.Col>
                    <sub.Col lg={2}>
                        <sub.Card>
                            Amount
                           
                            <input type="text" className='input' />
                            
                        </sub.Card>
                    </sub.Col>
                    
                </sub.Row>
                
            </sub.Container>
            </div>

     </div>
     );
}

export default Submit;