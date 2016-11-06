import React from 'react';
import ReactDOM from 'react-dom';

class PlayerContainter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playList : [],
            isPlaying : false,
        }   
    }

    render() {
        return <div> { this.props.children } </div>;
    }
}

export default PlayerContainter;