import React from 'react';

const RightArrow = (props) => {

    let background = {
        float:'right',
    }
    return (
        <button style={background} onClick={props.nextSlide} className="btn">
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </button>
    );
}

export default RightArrow;