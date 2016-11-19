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
            isPlaying : false,
            isLoading : false,
        }   
    }

    selectSong(newPlayList, newSongIndex){
        this.setState({
            playList : newPlayList,
            isPlaying: true,
            currentSongIndex: newSongIndex,
            isLoading: true,
        });
    }

    setCurrentSongIndex(index){
        this.setState({
            isPlaying:true,
            currentSongIndex: index
        })
    }

    getCurrentSongId(){
        return this.state.currentSongIndex != undefined ?
            this.state.playList[this.state.currentSongIndex].id : null;
    }

    render() {
        return <div>
                    <AppBar title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <TrackList onSongChange = {this.selectSong.bind(this)}
                               isLoading = {this.state.isLoading}
                               currentSongId = { this.getCurrentSongId()}/> 
                    <Player currentSongIndex = {this.state.currentSongIndex}
                            currentSong = {this.state.playList[this.state.currentSongIndex]}
                            changeSongIndex = {this.setCurrentSongIndex.bind(this)}/>
               </div>;
    }
}

export default PlayerContainter;