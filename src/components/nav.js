import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'white'
}


export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">

        <a className="navbar-brand d-lg-none logo" href="#">Merciless Skateboards</a>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">
      
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/tutorials">Tutorials</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/skatespots">Skate Spots</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/shop">Shop</NavLink>
            </li>
          </ul>
          
          <a className="navbar-brand d-none d-lg-block logo" href="#">Merciless Skateboards</a>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" exact activeStyle={activeStyle} to="/regsiter">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClass="active" to="cart"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
            <li className="nav-item">
              <input type="text" placeholder="Search.." ></input>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

{/* <nav id="topNav" className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          ☰
        </button>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={activeStyle} to="/skatespots">Skate Spots</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={activeStyle} to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>
        <a className="navbar-brand logo mx-auto" href="#">Merciless Skateboards</a>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact activeStyle={activeStyle} to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={activeStyle} to="/register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="cart"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
            <li className="nav-item">
              <input type="text" placeholder="Search.." ></input>
            </li>
          </ul>
        </div>
      </nav> */}