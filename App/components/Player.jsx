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

const floatButtonClassName =  "control-button";

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaused : false
        }
    }
   
    componentWillReceiveProps(nextProps) {
        SC.stream('/tracks/' + nextProps.currentSong.id).then(function(player){
            player.play();
            this.setState({
                currentSCPlayer : player,
                isPaused : false
            });

            player.on('time', () => this.setState({playbackTime : this.state.currentSCPlayer.currentTime()}));
            player.on('finish', () => this.props.changeSongIndex(this.props.currentSongIndex + 1));
            player.on('buffering_end', () => this.props.songLoaded());
        }.bind(this));
    }

    pause() {
        if (this.state.currentSCPlayer){
            this.setState({isPaused : !this.state.isPaused})

            if(this.state.isPaused){
                this.state.currentSCPlayer.play();
            } else{
                this.state.currentSCPlayer.pause();
            }   
        }
    }

    seek(event, value){
        this.state.currentSCPlayer.seek(value);
    }

    changeVolume(value){
        this.state.currentSCPlayer.setVolume(value);
    }

    secondsToHMS(ms){
      var tempTime = moment.utc(ms).format("mm:ss");
      return tempTime;
    }

    render() {
       var playIconClassName = this.state.isPaused ? 'paused' : 'playing';

       if (this.props.currentSong){
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
                        <VolumeBar changeVolumeHandler={this.changeVolume.bind(this)}
                                   initialVolume={this.state.currentSCPlayer.getVolume()}/>
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