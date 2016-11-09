import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import Previous from 'material-ui/svg-icons/av/skip-previous';
import Slider from 'material-ui/Slider';
import Next from 'material-ui/svg-icons/av/skip-next';
import Avatar from 'material-ui/Avatar';
import defaultImg from '../content/img/default-artwork.png';
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
        }.bind(this));
    }

    pause(){
        if(this.state.currentSCPlayer){
            this.setState({isPaused : !this.state.isPaused})

            if(this.state.isPaused){
                this.state.currentSCPlayer.play();
            } else{
                this.state.currentSCPlayer.pause();
            }   
        }
    }

    render() {
       var playButtonIcon = this.state.isPaused ? <PlayIcon /> : <PauseIcon />
       var player;

       if (this.props.currentSong){
          return <div className="player">
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
                        <Slider sliderStyle={{marginBottom:0}}/>
                    </div>

                    <div className="controls flex-container">
                        <FloatingActionButton mini={true} className={floatButtonClassName}>
                            <Previous />
                        </FloatingActionButton>

                        <FloatingActionButton className={floatButtonClassName} onClick= {() => this.pause()}>
                            {playButtonIcon}
                        </FloatingActionButton>

                        <FloatingActionButton mini={true}>
                            <Next />
                        </FloatingActionButton>
                    </div>
                </div>;      
    } 
        return null;
    }
}

export default Player;