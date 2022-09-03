import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashbord from './Client/Dashbord';
import Login from './Client/Login';
import Payment from './Client/Payment';
import Preview from './Client/Preview';
import Profile from './Client/Profile';
import Register from './Client/Register';
import Submit from './Client/Submit';
import Homepage from './Pages/Homepage';
// import Dashbord from './Client/Dashbord';
// import Dashbord from './Client/Dashbord';
// import Dashbord from './Client/Dashbord';

function App() {
  return (
    <div>
        <Router>
          <Routes>
          <Route exact path='/' element={< Homepage/>}></Route>
            <Route exact path='/dashbord' element={< Dashbord/>}></Route>
            <Route exact path='/login' element={< Login/>}></Route>
            <Route exact path='/payment' element={< Payment/>}></Route>
            <Route exact path='/preview' element={< Preview/>}></Route>
            <Route exact path='/profile' element={< Profile/>}></Route>
            <Route exact path='/register' element={< Register/>}></Route>
            <Route exact path='/submit' element={< Submit/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
