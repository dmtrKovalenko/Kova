import { connect } from 'react-redux'
import { changePlaybackTime, play, pause, playNextSong, playPreviousSong, changeVolume } from '../../../player-module/player-actions'

import CoreLayout from '../components/CoreLayout.js'

const mapDispatchToProps = {
    playPause : (isPaused) => isPaused ? play() : pause(),
    changePlaybackTime,
    playNextSong, 
    playPreviousSong,
    changeVolume
}

const mapStateToProps = (state) => ({
    currentSongId: state.player.currentSongId,
    isPaused : state.player.isPaused,
    isPlaying: state.player.isPlaying,
    volume : state.player.volume,
    currentSong : state.player.playList ?
        state.player.playList.find(song => song.id == state.player.currentSongId)
        : null  
})



export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)