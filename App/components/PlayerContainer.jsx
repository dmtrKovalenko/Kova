import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TracksList.jsx';
import Player from './Player.jsx';
import AppBar from 'material-ui/AppBar';

class PlayerContainter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playList : [],
            isPlaying : false     
        }   
    }

    selectSong(newPlayList, newSongId){
        this.setState({
            playList : newPlayList,
            isPlaying: true,
            currentSongId: newSongId
        });
    }

    render() {
        return <div>
                    <AppBar title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <TrackList onSongChange = {this.selectSong.bind(this)}/> 
                    <Player playList = {this.state.playList}
                            currentSongId = {this.state.currentSongId}
                            isPlaying = {this.state.isPlaying}/>
               </div>;
    }
}

export default PlayerContainter;