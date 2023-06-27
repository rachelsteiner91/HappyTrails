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

function App() {
  // Code goes here!
  class App extends React.Component {
    render() {
        return (
            <div>
                <LoginForm />
                <FavoriteButton />
                <SafetyReportForm />
            </div>
        );
    }
  }

}

export default App;
