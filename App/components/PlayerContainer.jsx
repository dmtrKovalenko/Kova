import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from './TracksList.jsx';
import Player from './Player.jsx';
import Filters from './Filters.jsx';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Filter from '../types/Filter.jsx';
import Immutable from 'Immutable';

class PlayerContainter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            playList : [],
            isPlaying : false,
            isLoading : false,
            Filters : Immutable.Map({filter : new Filter()}),
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

    applyNewFilters(newFilters){
        this.setState(({Filters}) => ({
            Filters: Filters.update('filter', filter =>  newFilters)
        }));
    }

    render() {
        return <div>
                    <Filters filter = {this.state.Filters}
                             applyFilters = {(newFilters) => this.applyNewFilters(newFilters)}/>

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