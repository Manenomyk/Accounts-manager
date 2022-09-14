import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import * as sub from "react-bootstrap";

import './Submit.css';

function Submit() {
    return ( 
        <div>
            <Navbar />

    <div className='Subbody'>
            <Sidebar />


        <div >
        <sub.Container className="mb-12">
        <h4>Questions done</h4>
                <hr />

            <sub.Container className='mb-5'>
                    <sub.Row>
                        <sub.Col lg={12} >
                            <sub.Card>
                                <div>
                                Our Cortages are characterized by their spacious well maintained rooms
                                            and ammenities that range from different sizes incuding rooms for one, for two and
                                            even For a whole family.

                                </div>

                               
                            
                            <sub.Container>
                                <sub.Row>
                                    <sub.Col lg={6}>
                                        {/* <sub.Card> */}
                                        <h5>Question</h5>
                                         <input type="text" />
                                        {/* </sub.Card> */}
                                    </sub.Col>
                                    <sub.Col lg={2}>
                                        {/* <sub.Card> */}
                                        <h5>Date</h5>
                                         <input type="date" />
                                        {/* </sub.Card> */}
                                    </sub.Col>
                                    <sub.Col lg={2}>
                                        {/* <sub.Card> */}
                                        <h5>Amount</h5>
                                         <input type="text" />
                                        {/* </sub.Card> */}
                                    </sub.Col>
                                </sub.Row>
                            </sub.Container></sub.Card>
                        


                        </sub.Col>       
                    </sub.Row>
                </sub.Container>

        </sub.Container>

        </div>





    </div>
<sub.Container className="mb-5" style={{background:"blue"}}>
    <sub.Row>
        <sub.Col lg={7}>
            qwerty
            <sub.Card>
                
                <input type="text" />
            </sub.Card>
        </sub.Col>
        <sub.Col lg={3}>
            <sub.Card>
                qwertyui
            </sub.Card>
        </sub.Col>
        <sub.Col lg={2}>
            <sub.Card>
                <input type="text" />
            </sub.Card>
        </sub.Col>
    </sub.Row>
</sub.Container>

        </div>
     );
}

export default Submit;