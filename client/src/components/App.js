import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import React from 'react';

import LoginForm from './LoginForm';
import FavoriteButton from './FavoriteButton';
import SafetyReportForm from './SafetyReportForm';
/*
App
|---NavBar
|---Search
|---Safety
|---Login_form
|---Favorite
|---Authorization
|       |- AdventurerCard(profile page)
|       |- AddReview
|       |- HikedTrailList
|               |-HikedTrailCard
|---TrailList
|     |-TrailCard
|
|---AdventurerCard
*/
=
import LoginForm from './login_form';
import Favorites from './favorites';
import Safety from './safety';



function App() {
  // Code goes here!
  class App extends React.Component {
    render() {
        return (
            <div>
                <LoginForm />
                <Favorites />
                <Safety />
            </div>
        );
    }
  }

}

export default App;
