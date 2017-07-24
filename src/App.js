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
        <form className="profile-form">
          <div>
            <label for="firstname">First name</label><br/>
            <input type="text" name="firstname" id="firstname" placeholder="Jane Doe"/>
          </div>
          <div>
            <label for="jobtitle">Job title</label><br/>
            <input type="text" name="jobtitle" id="jobtitle" placeholder="Developer"/>
          </div>
          <div>
            <label for="birthday">Birthday</label><br/>
            <input type="date" name="birthday" id="birthday"/>
          </div>
          <div>
            <label for="bio">Bio</label><br/>
            <textarea type="text" name="bio" id="bio" placeholder="A few words about yourself"/>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
