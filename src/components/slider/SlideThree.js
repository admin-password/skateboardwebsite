import React, { Component } from 'react';

const SlideThree= (props) => {
    
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/02/19/10/55/skateboarder-1209488__340.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
    }

    return <div style={background} className="slide"></div>
}

export default SlideThree;