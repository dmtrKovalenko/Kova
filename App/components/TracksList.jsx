import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import '../content/css/index.css';
import defaultImg from '../content/img/default-artwork.png';
import SongCard from './SongCard.jsx';

class TrackList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songsList : []
        }

        window.searchTracks("", (tracks) => this.setState({songsList : tracks}).bind(this)); 
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
                          title={track.title}/>);
            
        return <div className="tracks-container"> {tracks} </div>
    }
}

export default TrackList;