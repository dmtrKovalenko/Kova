import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import '../content/css/index.css';
import defaultImg from 'file!../content/img/4sh_music_embed_player_default_cover.png';


class TrackList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            songsList : []
        }

        window.searchTracks("", (tracks) => this.setState({songsList : tracks}).bind(this)); 
    }

    playSong (id){
       this.props.onSongChange(this.state.songsList, id);
    }
    
    getTracks(filter){
        this.state.songsList = window.searchTracks(filter, this.setCurrentSongs)
    }

    render(){
       var tracks =
            this.state.songsList.map(track => 

                <div key={track.id} onClick={() => this.playSong(track.id)} className="track-card-container col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <Card className="track-card">
                        <CardHeader  title={track.user.username} textStyle={{'verticalAlign': 'middle'}} avatar={track.user.avatar_url}/>
                        <CardMedia overlay= {<CardTitle title={track.title.slice(0, 30)} subtitle={track.genre} />} >
                            <img src={track.artwork_url ? track.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg} />
                        </CardMedia>
                    </Card>
                </div>)
            
        return <div className="tracks-container"> {tracks} </div>
    }
}

export default TrackList;