import React, { useEffect } from 'react';
//import { Redirect } from 'react';
import Navbar from './navbar/Navbar';
import './app.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './disk/disk';

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch =useDispatch()

    useEffect(() => {
      dispatch(auth())
    },[])

  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
      <div className="wrap">
      <Routes>
            {!isAuth && <Route path="/registration" element={<Registration />} />}
            {!isAuth && <Route path="/login" element={<Login />} />}
            {!isAuth && <Route path="/*" element={<Navigate to="/login" replace />} />}
            {isAuth && <Route path="/" element={<Disk />} />}
            {isAuth && <Route path="/*" element={<Navigate to="/" replace />} />}
          </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
