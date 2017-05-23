import { connect } from 'react-redux'
import { fetchSongs } from './SongsListActions'
import { selectSong } from '../../player-module/player-actions'

import SongsList from './components/SongsList'

const mapDispatchToProps = {
  selectSong : (id, playList) => selectSong(id, playList),
  fetchSongs
}

const mapStateToProps = (state) => ({
  songsList : state.songs.songsList,
  currentSongId : state.player.currentSongId,
  isLoading : state.songs.isLoading,
  filter : state.player.filter
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsList)
