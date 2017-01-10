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
import defaultSDK from '../soundCloudSDK.jsx';

const floatButtonClassName =  "control-button";
const defaultVolume = 0.5;
let SDK = new defaultSDK();

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaused : false,
            isPlaying: false,
            playbackTime: 0,
        }
    }
   
    componentWillReceiveProps(nextProps) {
        if(nextProps.currentSong){
            this.setState({isPlaying: true, isPaused:false});
        }
    }

    pause() {
        if (this.state.isPlaying){
            this.setState({isPaused : !this.state.isPaused})

            if(this.state.isPaused){
                this.audioPlayer.play();
            } else{
                this.audioPlayer.pause();
            }   
        }
    }

    startPlay(){
        this.audioPlayer.volume = defaultVolume;
        this.audioPlayer.play();
    }

    setTime(){
        this.setState({playbackTime:this.audioPlayer.currentTime})
    }

    seek(event, value){
        this.audioPlayer.currentTime = value;
    }

    secondsToHMS(ss){
      var tempTime = moment.utc(ss).format("mm:ss");
      return tempTime;
    }

    selectNextSong(){
        debugger
        this.props.changeSongIndex(this.props.currentSongIndex + 1)
    }

    render() {
       var playIconClassName = this.state.isPaused ? 'paused' : 'playing';

       if (this.state.isPlaying){
          return <div className="player animated slideInUp">
                    <audio ref={(audio) => {this.audioPlayer = audio}} 
                           src={SDK.getStreamUrl(this.props.currentSong)}
                           onCanPlayThrough={this.startPlay.bind(this)}
                           onTimeUpdate={this.setTime.bind(this)}
                           onEnded={this.selectNextSong.bind(this)}/>
                    
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
                        <div className="current time"> {this.secondsToHMS(this.state.playbackTime * 1000)} </div>
                        <div className="slider-container">
                            <Slider sliderStyle={{marginBottom:0, marginTop:30}} 
                                    max={this.props.currentSong.duration / 1000} 
                                    value={this.state.playbackTime}
                                    onChange={this.seek.bind(this)}/>
                        </div>
                        <div className="duration time"> {this.secondsToHMS(this.props.currentSong.duration)} </div>
                    </div>

                    <div className="controls flex-container">
                        <VolumeBar initialVolume={defaultVolume}
                                   setVolume = {(value) => this.audioPlayer.volume = value}/>

                        <FloatingActionButton mini={true} className={floatButtonClassName}
                                              onClick={() => this.props.changeSongIndex(this.props.currentSongIndex - 1)}>
                            <Previous />
                        </FloatingActionButton>

                        <FloatingActionButton className="control-button play-button" 
                                              onClick= {() => this.pause()}>
                            <PlayPauseIcon className={playIconClassName}/>
                        </FloatingActionButton>

                        <FloatingActionButton mini={true}
                                              onClick={this.selectNextSong.bind(this)}>
                            <Next />
                        </FloatingActionButton>
                    </div>
                </div>;      
    } 
        return null;
    }
}

export default Player;