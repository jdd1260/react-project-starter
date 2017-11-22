import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';

class Example extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            images: ["pexels-photo-39811.jpeg", "pexels-photo-131723.jpeg", "pexels-photo-235621.jpeg", "pexels-photo-388065.jpeg"],
            index: 0
        };
        setInterval((
            () => this.setState(
                {
                    index: (this.state.index + 1) % this.state.images.length
                    
                })
        ).bind(this), 3000);

    }
 
    render() {
        const images = this.state.images.map((image, index) => (
            <img src={`/images/${image}`} key={index} alt={`image ${index}`} className={index != this.state.index ? 'd-none' : ''} />
        ));
        
        return (
            <div className="example mt-3">
                <Jumbotron className="text-center">
                    <h2 className="display-3"> React Project Starter!</h2>
                    {images}
                </Jumbotron>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { }; 
}

export default connect(mapStateToProps, {})(Example);