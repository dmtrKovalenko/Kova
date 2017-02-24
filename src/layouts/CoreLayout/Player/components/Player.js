import React from 'react'
import Snackbar from 'material-ui/Snackbar';

const defaultVolume = 0.5

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrorShackOpen : false
    }
  }
  // Pass there checks for state changing and call appropriate method for html5 audio
  componentDidUpdate (prevProps) {
    if (prevProps.isPaused != this.props.isPaused) {
      this.playPause(this.props.isPaused)
    }

    if (prevProps.volume != this.props.volume) {
      this.setVolume(this.props.volume)
    }

    // On seek pause playing, but not change state to avoid change of ui
    if (prevProps.isSeeking != this.props.isSeeking) {
      this.playPause(this.props.isSeeking)
    }

    if (this.props.isSeeking && prevProps.playbackTime != this.props.playbackTime) {
      this.seekTo(this.props.playbackTime)
    }
  }

  componentDidMount () {
    this.audioPlayer.volume = defaultVolume
    this.props.changeVolume(defaultVolume)
  }

  playPause = (toPause) => {
    if (toPause) {
      this.audioPlayer.pause()
    } else {
      this.audioPlayer.play()
    }
  }

  seekTo = (value) => {
    this.audioPlayer.currentTime = value
  }

  setVolume = (newVolume) => {
    this.audioPlayer.volume = this.props.volume
  }

  showError = (e) => {
    this.setState({isErrorShackOpen: true})
    this.props.playNextSong()
  }

  render () {
    return (
      <span>
        <audio ref={ref => (this.audioPlayer = ref)}
          src={this.props.currentStreamUrl}
          controls={false}
          onCanPlayThroughCapture={() => this.audioPlayer.play()}
          onTimeUpdate={() => this.props.changePlaybackTime(this.audioPlayer.currentTime)}
          onError={this.showError}
          onEnded={() => {
            this.props.playbackEnded()
            this.audioPlayer.play()
          }} />

        <Snackbar open={this.state.isErrorShackOpen}
            message="Oops, error was thrown, dont worry."
            autoHideDuration={2000}
            onRequestClose={() => this.setState({isErrorShackOpen: false})}  />
      </span>
    )
  }
}

export default Player
