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
        if (prevProps.isPaused != this.props.isPaused){
            if (this.props.isPaused){
                this.audioPlayer.pause();
            } else {
                this.audioPlayer.play();
            }
        }

        if (prevProps.volume != this.props.volume){
            this.audioPlayer.volume = this.props.volume;
        }
    }

    componentDidMount() {
        this.audioPlayer.volume = defaultVolume;
        this.props.changeVolume(defaultVolume)
    }
    
    render (){
        return (
            <audio ref={ref => this.audioPlayer = ref}
                   src = {soundCloudSdk.getStreamUrl(this.props.currentSongId)}
                   controls={false}
                   onCanPlayThrough={() => this.audioPlayer.play()}
                   onTimeUpdate={() => this.props.changePlaybackTime(this.audioPlayer.currentTime)}/>
        )
    }
}

export default Player;