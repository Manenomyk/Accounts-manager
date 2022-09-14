import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Sidebar from '../Sidebar/Sidebar';
import * as prev from 'react-bootstrap';

import './Preview.css';
function Preview() {
    return ( 
        <div>
            <Navbar />

            <div className='prevbody'>
            <Sidebar />


            <prev.Container >
                <prev.Row >
                    <prev.Col lg={12}>
                        <prev.Card className='prevcard'>
                            <prev.Card.Title className='mx-auto'>
                                
                            </prev.Card.Title>

                            <prev.Card.Body>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Questions</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>qwertyui qwertyu qertyu</td>
                                            <td>123456</td>
                                            <td>1234</td>
                                            <td>pending</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </prev.Card.Body>
                        </prev.Card>
                    </prev.Col>
                </prev.Row>
            </prev.Container>
            </div>
           
        </div>
     );
}

export default Preview;