import React, { Component } from 'react';
import './App.css';
import iconHamburgerNav from './images/icon-hamburger-nav.png'
import imgProfile from './images/img-profile.png'

class App extends Component {
  render() {
    return (
      <div className="profile">
        <div className="header text-center">
          <div className="pull-left nav">
            <img src={iconHamburgerNav} alt="navigation"/>
          </div>
          <div className="text-center header-text">
            <h1>Profile</h1>
          </div>
        </div>
        <div className="photo-container text-center">
          <img src={imgProfile} alt="profile-img"/>
        </div>
      </div>
    );
  }
}

export default App;
