import React, { Component } from 'react';
import Nav from './nav';
import Slider from './slider/Slider';

export default class Home extends Component {
  render() {
    return (
      <div>
        <br></br>
        <p align="center">Boards made out of 100% recycled materials</p>
        <Slider />
        <br></br>
        <h2 align="center">About us</h2>
      </div>
    );
  }
}