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
        }   
    }

    selectSong(newPlayList, newSongIndex){
        this.setState({
            playList : newPlayList,
            isPlaying: true,
            currentSongIndex: newSongIndex
        });
    }

    setCurrentSongIndex(index){
        this.setState({
            isPlaying:true,
            currentSongIndex: index
        })
    }

    render() {
        return <div>
                    <AppBar title="Title"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    <TrackList onSongChange = {this.selectSong.bind(this)}
                               isLoading = {this.state.isLoading}/> 
                    <Player currentSongIndex = {this.state.currentSongIndex}
                            currentSong = {this.state.playList[this.state.currentSongIndex]}
                            isPlaying = {this.state.isPlaying}
                            changeSongIndex = {this.setCurrentSongIndex.bind(this)}
                            songLoaded = {() => this.setState({songIsLoading : false})}/>
               </div>;
    }
}

export default PlayerContainter;