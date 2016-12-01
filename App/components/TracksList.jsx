import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import '../content/css/index.css';
import defaultImg from '../content/img/default-artwork.png';
import SongCard from './SongCard.jsx';
import SDK from '../soundCloudSDK.jsx';
import Immutable from 'Immutable';

class TrackList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songsList : []
        }

        SDK.searchTracks(this.props.filter, (tracks) => this.setState({songsList : tracks}).bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentSongId){
            this.setState({currentSongId : nextProps.currentSongId});
        }

        if(!Immutable.is(nextProps.filter, this.props.filter)){
            SDK.searchTracks(nextProps.filter.toJS().filter, (tracks) => this.setState({songsList : tracks}).bind(this));
        }
    }

    shouldComponentUpdate(nextProps){
        return true;
    }
 
    playSong (track){
        this.props.onSongChange(this.state.songsList, this.state.songsList.indexOf(track));
    }

    getTracks(filter){
        this.state.songsList = window.searchTracks(filter, this.setCurrentSongs)
    }

    render(){
       var tracks =
            this.state.songsList.map(track =>
                <SongCard key={track.id}
                          artwork={track.artwork_url ? track.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg}
                          title={track.title}
                          play={() => this.playSong(track)}
                          isCurrent={this.state.currentSongId == track.id}/>);

        return <div className="tracks-container"> {tracks} </div>
    }
}

export default TrackList;