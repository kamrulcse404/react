import React, { Component } from 'react';
import MovieLists from './movies.components';
import Navbar from '../common/navbar.component';
import { Route, Routes } from "react-router-dom";
import Login from './login.components';
import SignUp from './signup.components';

class App extends Component {
    render() { 
        return (
          <>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/movies" element={<MovieLists />} />
              <Route path="/" element={<MovieLists />} />
            </Routes>
          </>
        );
    }
}

export default App;