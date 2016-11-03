import React from 'react';
import ReactDOM from 'react-dom';

class TrackList extends React.Component{
    state = {
        songsList = [],
        currentPlayingIndex,
    }
    
    constructor(props) {
        super(props);
        songsList = searchTracks();
 
    }

    render(){
        return <div> {this.props.children} </div>;
    }
}

export default TrackList;