import React from 'react';

const LeftArrow = (props) => {

    let background = {
        float:'left',
    }
return (
    <button style={background} onClick={props.previousSlide} className="btn backArrow">
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </button>
);
}

export default LeftArrow;