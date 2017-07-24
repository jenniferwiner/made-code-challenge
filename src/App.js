import React, { Component } from 'react';
import './App.css';
import iconHamburgerNav from './images/icon-hamburger-nav.png'
import imgProfile from './images/img-profile.png'
import imgSave from './images/img-save.png'

class App extends Component {
  render() {
    return (
      <div>
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
            <div className="profile-form-content">
                <label>
                  First name
                  <input type="text" name="firstname" id="firstname" placeholder="Jane Doe"/>
                </label>
                <label>
                  Job title
                  <input type="text" name="jobtitle" id="jobtitle" placeholder="Developer"/>
                </label>
                <label>
                  Birthday
                  <input type="date" name="birthday" id="birthday"/>
                </label>
                <label>
                  Bio
                  <textarea type="text" name="bio" id="bio" placeholder="A few words about yourself"/>
                </label>
              </div>
              <img src={imgSave} className="save-button pull-right" alt="save-button"/>
          </form>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
