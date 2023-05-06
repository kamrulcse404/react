import React, { Component } from 'react';
import MovieLists from './movies.components';
import Navbar from '../common/navbar.component';
import { Route, Routes } from "react-router-dom";
import Login from './login.components';
import SignUp from './signup.components';
import MovieForm from './movie-form.component';
import MovieInfo from './movie-info.components';

class App extends Component {
    render() { 
        return (
          <>
            <Navbar />
            <Routes>
              <Route path="/movie/:id" element={<MovieInfo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/movies" element={<MovieLists />} />
              <Route path="/add-movie" element={<MovieForm />} />
              <Route path="/" element={<MovieLists />} />
            </Routes>
          </>
        );
    }
}

export default App;