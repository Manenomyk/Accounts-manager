import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashbord from './Client/Dashboard/Dashbord';
import Login from './Client/Login/Login';
import Payment from './Client/Payment/Payment';
import Preview from './Client/Preview/Preview';
import Profile from './Client/Profile/Profile';
import Register from './Client/Register/Register';
import Submit from './Client/Submit/Submit';
import Homepage from './Pages/Homepage';
import Navbar from './Client/Navbar/Navbar';
import Sidebar from './Client/Sidebar/Sidebar';
import Received from './Client/Payment/Received';

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
            <Route exact path='/Navbar' element={< Navbar/>}></Route>
            <Route exact path='/sidebar' element={< Sidebar/>}></Route>
            <Route exact path='/received' element={< Received/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
