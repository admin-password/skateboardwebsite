import React, { Component } from 'react';

const SlideTwo= (props) => {

    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/01/19/17/01/skateboarding-1149507__340.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
    }
    
    return <div style={background} className="slide"></div>
}

export default SlideTwo;