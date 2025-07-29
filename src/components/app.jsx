import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom';

import Home from './content/home';
import Calculator from './content/calculator';
import Register from './content/register';
import Login from './content/login';
import NotFound from './content/notFound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/calculator' element={<Calculator />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/404' element={<NotFound />}></Route>
                        <Route path='*' element={<Navigate replace to="/404"></Navigate>}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;