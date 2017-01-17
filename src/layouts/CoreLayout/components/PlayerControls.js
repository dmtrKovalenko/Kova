import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import PlayPauseIcon from './Controls-components/PlayPauseIcon'
import VolumeBar from './Controls-components/VolumeBar'
import Previous from 'material-ui/svg-icons/av/skip-previous'
import Slider from 'material-ui/Slider'
import Next from 'material-ui/svg-icons/av/skip-next'
import Avatar from 'material-ui/Avatar'
import defaultImg from '../../../assets/default-artwork.png'
import '../styles/Controls.scss'

export const PlayerControls = (props) => {
    const floatButtonClassName =  "control-button";
    const playIconClassName = props.isPaused ? 'paused' : 'playing';

    if (props.currentSong && props.isPlaying){
        return (
            <div className="player animated slideInUp">
                <div className="artwork flex-container">
                    <Avatar src={props.currentSong.artwork_url ? 
                            props.currentSong.artwork_url.replace('large.jpg', 't500x500.jpg') : defaultImg} 
                            size={60}/>       
                </div>
                
                <div className="title flex-container">
                    <a className="player-song-title"> {props.currentSong.title} </a>
                    <a className="player-user-name"> {props.currentSong.user.username} </a>
                </div>

                <div className="slider flex-container">
                    <div className="current time"> 
                        {props.playbackTime} 
                    </div>
                    <div className="slider-container">
                        <Slider sliderStyle={{marginBottom:0, marginTop:30}} 
                                max={props.currentSong.duration / 1000}
                                value={props.playbackTime}
                                /*todo add seek method*//>
                    </div>
                    <div className="duration time">
                        00:00
                    </div>
                </div>

                <div className="controls flex-container">
                    <VolumeBar onChange={props.changeVolume}/>

                    <FloatingActionButton mini={true} className={floatButtonClassName}
                                          onClick={props.playPreviousSong}>
                        <Previous />
                    </FloatingActionButton>

                    <PlayPauseIcon isPaused={props.isPaused} 
                                   onClick= {() => props.playPause(props.isPaused)}/>

                    <FloatingActionButton mini={true}
                                          onClick={props.playNextSong}>
                        <Next />
                    </FloatingActionButton>
                </div>
            </div> )
    } else {
        return null;
    }
}

export default PlayerControls;