import React, { PropTypes } from 'react'
import Immutable from 'immutable'

import SongCard from './SongCard'
import Filter from '../../../types/Filter.js'
import Spinner from '../../../shared/Spinner'

import '../styles/SongsList.scss'

class SongsList extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (
      this.props.location.query !== nextProps.location.query ||
      this.props.currentSongId !== nextProps.currentSongId ||
      this.props.isLoading !== nextProps.isLoading ||
      this.props.filter !== nextProps.filter ||
      !Immutable.is(this.props.songsList, nextProps.songsList))
  }

  componentDidMount () {
    this.props.fetchSongs(this.props.location.query.q, new Filter())
  }

  componentDidUpdate (prevProps) {
    if (this.props.location.query !== prevProps.location.query ||
      this.props.filter !== prevProps.filter) {
      this.props.fetchSongs(this.props.location.query.q, this.props.filter)
    }
  }

  render () {
    if (this.props.isLoading) {
      return <Spinner />
    }

    const tracks = this.props.songsList
      ? this.props.songsList.toJS().map(track =>
          <SongCard
            key={track.id}
            artwork={track.artworkUrl}
            title={track.title}
            userName={track.user.name}
            isCurrent={this.props.currentSongId === track.id}
            onSelect={() => this.props.selectSong(track.id, this.props.songsList.toJS())} />)
      : null

    return <div className='tracks-container'> {tracks} </div>
  }
}

SongsList.propTypes = {
  location: PropTypes.object,
  isLoading: PropTypes.bool,
  filter: PropTypes.objectOf(Filter),
  currentSongId: PropTypes.number,
  songsList: PropTypes.object,

  fetchSongs: PropTypes.func,
  selectSong: PropTypes.func
}

export default SongsList
