import React from 'react'
import Filter from '../../../types/Filter'
import SongCard from './SongCard'
import defaultImg from '../../../assets/default-artwork.png'
import Immutable from 'immutable'
import '../styles/SongsList.scss'

class SongsList extends React.Component {
  shouldComponentUpdate (nextProps) {
    if (this.props.location.query != nextProps.location.query ||
        this.props.currentSongId != nextProps.currentSongId || 
        !Immutable.is(this.props.songsList, nextProps.songsList)) {
      return true
    }

    return false
  }

  componentDidMount () {
    this.props.fetchSongs(new Filter(this.props.location.query.q))
  }

  componentDidUpdate (prevProps) {
    if (this.props.location.query != prevProps.location.query) {
      this.props.fetchSongs(new Filter(this.props.location.query.q))
    }
  }

  render () {
    const tracks = this.props.songsList
            ? this.props.songsList.toJS().map(track =>
              <SongCard key={track.id}
                artwork={track.artwork_url ? track.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg}
                title={track.title}
                userName={track.user.username}
                onSelect={() => this.props.selectSong(track.id, this.props.songsList.toJS())}
                isCurrent={this.props.currentSongId == track.id} />)
            : null

    return <div className='tracks-container'> {tracks} </div>
  }
}

export default SongsList
