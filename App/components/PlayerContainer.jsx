import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TracksList.jsx';
import Player from './Player.jsx';
import Filters from './Filters.jsx';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Filter from '../types/Filter.jsx';

class PlayerContainter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playList : [],
            isPlaying : false,
            isLoading : false,
            Filters : new Filter(),
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
                    <Filters filter = {this.state.Filters}
                             applyFilters = {(filters) => this.setState({Filters : filters})}/>

                    <TrackList filter = {this.state.Filters}
                               onSongChange = {this.selectSong.bind(this)}
                               isLoading = {this.state.isLoading}
                               currentSongId = { this.getCurrentSongId()}/>

                    <Player currentSongIndex = {this.state.currentSongIndex}
                            currentSong = {this.state.playList[this.state.currentSongIndex]}
                            changeSongIndex = {this.setCurrentSongIndex.bind(this)}/>
               </div>;
    }
}

export default PlayerContainter;