import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlayPauseIcon from './PlayPauseToggleIcon.jsx'
import VolumeBar from './VolumeBar.jsx'
import Previous from 'material-ui/svg-icons/av/skip-previous';
import Slider from 'material-ui/Slider';
import Next from 'material-ui/svg-icons/av/skip-next';
import Avatar from 'material-ui/Avatar';
import defaultImg from '../content/img/default-artwork.png';
import moment from 'moment';
import '../content/css/player.css';
import SDK from '../soundCloudSDK.jsx';

const floatButtonClassName =  "control-button";

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaused : false,
            isPlaying: false,
        }
    }
   
    componentWillReceiveProps(nextProps) {
        if(nextProps.currentSong){
            SDK.streamSong(nextProps.currentSong.id,() => this.setInitialHandlers());
            this.setState({isPlaying: true, isPaused:false});
        }
    }

    setInitialHandlers(){
        let component = this;

        SDK.onTimeChanged(() => component.setState({playbackTime :  window.SCplayer.currentTime()}));
        SDK.onPlayEnded(() => component.props.changeSongIndex(this.props.currentSongIndex + 1));
    }

    pause() {
        if (this.state.isPlaying){
            this.setState({isPaused : !this.state.isPaused})

            if(this.state.isPaused){
                SDK.play();
            } else{
                SDK.pause();
            }   
        }
    }

    seek(event, value){
        SDK.seek(value);
    }

    secondsToHMS(ms){
      var tempTime = moment.utc(ms).format("mm:ss");
      return tempTime;
    }

    render() {
       var playIconClassName = this.state.isPaused ? 'paused' : 'playing';

       if (this.state.isPlaying){
          return <div className="player animated slideInUp">
                    <div className="artwork flex-container">
                        <Avatar src={this.props.currentSong.artwork_url ? 
                                this.props.currentSong.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg} 
                                size={60}/>       
                    </div>
                    
                    <div className="title flex-container">
                        <a className="player-song-title">{this.props.currentSong.title}</a>
                        <a className="player-user-name">{this.props.currentSong.user.username}</a>
                    </div>

                    <div className="slider flex-container">
                        <div className="current time"> {this.secondsToHMS(this.state.playbackTime)} </div>
                        <div className="slider-container">
                            <Slider sliderStyle={{marginBottom:0, marginTop:30}} 
                                    max={this.props.currentSong.duration} 
                                    value={this.state.playbackTime}
                                    onChange={this.seek.bind(this)}/>
                        </div>
                        <div className="duration time"> {this.secondsToHMS(this.props.currentSong.duration)} </div>
                    </div>

                    <div className="controls flex-container">
                        <VolumeBar initialVolume={SDK.getVolume()}/>
                        <FloatingActionButton mini={true} className={floatButtonClassName}
                                              onClick={() => this.props.changeSongIndex(this.props.currentSongIndex - 1)}>
                            <Previous />
                        </FloatingActionButton>

                        <FloatingActionButton className="control-button play-button" 
                                              onClick= {() => this.pause()}>
                            <PlayPauseIcon className={playIconClassName}/>
                        </FloatingActionButton>

                        <FloatingActionButton mini={true}
                                              onClick={() => this.props.changeSongIndex(this.props.currentSongIndex + 1)}>
                            <Next />
                        </FloatingActionButton>
                    </div>
                </div>;      
    } 
        return null;
    }
}

export default Player;