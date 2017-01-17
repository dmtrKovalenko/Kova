import React from 'react'
import Filter from '../../../types/Filter'
import SongCard from './SongCard'
import defaultImg from '../../../assets/default-artwork.png'
import Immutable from 'immutable'
import '../styles/SongsList.scss'

class SongsList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSongs(new Filter());
    }

    render() {
        const tracks = this.props.songsList ?
            this.props.songsList.toJS().map(track =>
                <SongCard key={track.id}
                          artwork={ track.artwork_url ? track.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg}
                          title={track.title}
                          userName={track.user.username}
                          onSelect={() => this.props.selectSong(track.id, this.props.songsList.toJS())}
                          isCurrent={this.props.currentSongId == track.id}/>)
            : null;

         return <div className="tracks-container"> {tracks} </div>
    }
}

export default SongsList
