import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TracksList.jsx';

class PlayerContainter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playList : [],
            isPlaying : false,
        }   
    }

    render(){
        return <div>
         <TrackList/>
         { this.props.children } </div>;
    }
}

export default PlayerContainter;