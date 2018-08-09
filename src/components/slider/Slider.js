import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from '../../actions/RightArrow';
import LeftArrow from '../../actions/LeftArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        setInterval(this.nextSlide, 5000);
     }

    render() {

        return (
            <div className="slider" style={{marginTop:"20px"}}>
                <LeftArrow previousSlide={this.previousSlide} />
                <RightArrow nextSlide={this.nextSlide} />

                {this.state.slideCount === 1 ? <SlideOne /> : null}
                {this.state.slideCount === 2 ? <SlideTwo /> : null}
                {this.state.slideCount === 3 ? <SlideThree /> : null}
                
               
            
            </div>
        );
    }

    nextSlide() {
        var i = this.state.slideCount + 1;
        if (i > 3) i=1
        this.setState({ slideCount: i})
    }

    previousSlide() {
        var i = this.state.slideCount - 1;
        if (i < 1) i=3
        this.setState({ slideCount: i})
    }
}