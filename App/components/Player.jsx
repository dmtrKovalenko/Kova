import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Play from 'material-ui/svg-icons/av/play-arrow';
import Previous from 'material-ui/svg-icons/av/skip-previous';
import Next from 'material-ui/svg-icons/av/skip-next';
import '../content/css/player.css';

const floatButtonStyle = {
    marginRight: 20,
};

class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaused : false
        }
    }
   
    componentWillReceiveProps(nextProps) {
        SC.stream('/tracks/' + nextProps.currentSongId).then(function(player){
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
       return <div className="player">
                <div className="col-xs-6 col-md-4 col-lg-2">
                    <FloatingActionButton mini={true} style={floatButtonStyle}>
                        <Previous />
                    </FloatingActionButton>

                    <FloatingActionButton style={floatButtonStyle} onClick= {() => this.pause()}>
                        <Play />
                    </FloatingActionButton>

                    <FloatingActionButton mini={true} style={floatButtonStyle}>
                        <Next />
                    </FloatingActionButton>
                </div>
            </div>;      
    }
}

export default Player;