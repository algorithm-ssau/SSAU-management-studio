import React, { useEffect } from 'react';
import { Redirect } from 'react';
import Navbar from './navbar/Navbar';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './authorization/Registration';
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './disk//disk';

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
        { !isAuth ?
           <Routes>
           <Route path='/registration' element={<Registration/>} />
           <Route path='/login' element={<Disk/>} />
           </Routes>
           :
           <Routes>
           <Route path='/' element={<Disk/>} />
           
           </Routes>
        }
      </div>
    </div>
    </BrowserRouter>
    
  );
}
//<Redirect to='/login' />
//<Redirect to='/login' />
export default App;
