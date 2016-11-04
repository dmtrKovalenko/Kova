import React from 'react';
import ReactDOM from 'react-dom';

class TrackList extends React.Component{
    constructor(props) {
        super(props);
        this.songsList = window.searchTracks("");
    }

    render(){
       var tracksToView = this.state.songsList.map(track => 
             <div> {this.props.children} </div>);

        return tracksToView;
    }
}

export default TrackList;