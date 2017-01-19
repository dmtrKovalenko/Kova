import React from 'react';
import ReactDOM from 'react-dom';
import enhanceWithClickOutside from 'react-click-outside';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import VolumeDown from 'material-ui/svg-icons/av/volume-down';
import VolumeUp from 'material-ui/svg-icons/av/volume-up';
import VolumeMute from 'material-ui/svg-icons/av/volume-mute';
import {cyan500} from 'material-ui/styles/colors';

class VolumeBar extends React.Component {
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
        if (this.state.isDisplaying != null){
            this.setState({isDisplaying:false});
        }
    }
    
    render() {      
        let volumeBarClassName = "volume-slider-container animated ";
        const volumeIcon = this.props.volume == 0 ? <VolumeMute color = {cyan500}/>
                              : this.props.volume > 0.5 ? <VolumeUp color = {cyan500}/>
                              : <VolumeDown color = {cyan500}/>;
        

        this.state.isDisplaying == null ? volumeBarClassName += "hidden"
                                      : this.state.isDisplaying ? volumeBarClassName += "bounceInUp" 
                                      : volumeBarClassName += "bounceOutDown";

        return (
            <div className="volume-bar">
                <Paper className={volumeBarClassName} zDepth={3}>
                    <Slider style={{height: 100}} 
                            axis="y"
                            defaultValue={0.5}
                            min = {0}  max = {1}
                            onChange={(event, value) => this.props.onChange(value)} />
                </Paper>

                <IconButton onClick={this.showVolumeBar.bind(this)}>
                    {volumeIcon}
                </IconButton>
            </div>)
    }
}

export default enhanceWithClickOutside(VolumeBar);