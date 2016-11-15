import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import enhanceWithClickOutside from 'react-click-outside';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import VolumeDown from 'material-ui/svg-icons/av/volume-down';
import {cyan500} from 'material-ui/styles/colors';
import '../content/css/animate.css';
import '../content/css/player.css';

class VolumeBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDisplaying : null
        }
    }
    
    showVolumeBar(){
        this.setState({isDisplaying:!this.state.isDisplaying});
    }
    
    handleClickOutside(){
        this.setState({isDisplaying:false});
    }

    render(){
        let volumeBarClassName = "volume-slider-container animated ";
        
      
        this.state.isDisplaying == null ? volumeBarClassName += "hidden"
                                    : this.state.isDisplaying ? volumeBarClassName += "bounceInUp" 
                                    : volumeBarClassName += "bounceOutDown";
        
        return  <div className="volume-bar">
                    <Paper className={volumeBarClassName} zDepth={3}>
                        <Slider style={{height: 100}} axis="y" defaultValue={0.5} />
                    </Paper >
                    <IconButton onClick={this.showVolumeBar.bind(this)}>
                        <VolumeDown color = {cyan500}/>
                    </IconButton>
                </div>
    }
}

export default enhanceWithClickOutside(VolumeBar);