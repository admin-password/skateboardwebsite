import React, { Component } from 'react';

const SlideOne= (props) => {

    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/07/10/11/15/skateboarder-388977__340.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '450px',
    }

    return <div style={background} className="slide"></div>
}

export default SlideOne;