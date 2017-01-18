import React from 'react'
import SoundCloudSdk from '../../../SDKs/SoundCloudSDK'

const soundCloudSdk = new SoundCloudSdk();
const defaultVolume = 0.5;

class Player extends React.Component {
    constructor(props){
        super(props);
    }

    //Pass there checks for state changing and call appropriate method for html5 audio
    componentDidUpdate(prevProps) {
        if (prevProps.isPaused != this.props.isPaused) {
            this.playPause(this.props.isPaused);
        }

        if (prevProps.volume != this.props.volume) {
            this.setVolume(this.props.volume)
        }
        
        //On seek pause playing, but not change state to avoid change of ui
        if (prevProps.isSeeking != this.props.isSeeking) {
            this.playPause(this.props.isSeeking);
        }

        if (this.props.isSeeking && prevProps.playbackTime != this.props.playbackTime) {
            this.seekTo(this.props.playbackTime);
        }
    }

    componentDidMount() {
        this.audioPlayer.volume = defaultVolume;
        this.props.changeVolume(defaultVolume);
    }

    playPause(toPause) {
        if (toPause){
            this.audioPlayer.pause();
        } else {
            this.audioPlayer.play();
        }
    }

    seekTo(value) {
        this.audioPlayer.currentTime = value;
    }

    setVolume(newVolume) {
        this.audioPlayer.volume = this.props.volume;
    }
    
    render (){
        return (
            <audio ref={ref => this.audioPlayer = ref}
                   src={soundCloudSdk.getStreamUrl(this.props.currentSongId)}
                   controls={false}
                   onCanPlayThrough={() => this.audioPlayer.play()}
                   onTimeUpdate={() => this.props.changePlaybackTime(this.audioPlayer.currentTime)}/>
        )
    }
}

export default Player;