import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';

import * as pay from 'react-bootstrap';

import './Payment.css';
function Payment() {
    return ( 
        <div>
            <Navbar />

            <div className='paybody'>
                <Sidebar />


            <pay.Container>
                <pay.Row className='payrow'>
                    <pay.Col lg={12}>
                        <div className='links'>
                        <Link to={'/Payment'} className="link1">Approve Payment</Link>
                        <Link to={'/Received'} className="link2">Received Payment</Link>
                        </div>
                        
                        <pay.Card className='paycard'>
                        <pay.Card.Title className='mx-auto'>
                                
                                </pay.Card.Title>
    
                                <pay.Card.Body>
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
                                                <td><button className='btn btn-danger' id='paid'> Approve...</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </pay.Card.Body>
                        </pay.Card>
                    </pay.Col>
                </pay.Row>
            </pay.Container>
            </div>
            
        </div>
     );
}

export default Payment;