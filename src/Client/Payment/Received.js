import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import * as rec from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Payment.css';
function Received() {
    return ( 
        <div>
            <Navbar />

            <div className='recbody'>
                 <Sidebar />
                 
                 <rec.Container>
                    <rec.Row className='payrow'>
                        <rec.Col lg={12}>
                            <div className='links'>
                            <Link to={'/Payment'} className="link1">Approve Payment</Link>
                            <Link to={'/Received'} className="link2">Received Payment</Link>
                            </div>
                            
                            <rec.Card className='paycard'>
                            <rec.Card.Title className='mx-auto'>
                                    
                                    </rec.Card.Title>
        
                                    <rec.Card.Body>
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>Questions</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>qwertyui qwertyu qertyu</td>
                                                    <td>123456</td>
                                                    <td>1234</td>
                                                    <td>pending</td>
                                                    <td><button className='btn btn-success' id='paid'> Success</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </rec.Card.Body>
                            </rec.Card>
                        </rec.Col>
                    </rec.Row>
                 </rec.Container>
            </div>
        </div>
     );
}

export default Received;