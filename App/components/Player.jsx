import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Play from 'material-ui/svg-icons/av/play-arrow';
import Previous from 'material-ui/svg-icons/av/skip-previous';
import Next from 'material-ui/svg-icons/av/skip-next';
import '../content/css/player.css';

 const style = {
        marginRight: 20,
    };

class Player extends React.Component{
    constructor(props) {
        super(props);
    }
   
    componentWillReceiveProps(nextProps) {
        SC.stream('/tracks/' + nextProps.currentSongId).then(function(player){
            player.play();
        });
    }

    render() {
       return <div className="player">
                <div className="col-xs-6 col-md-4 col-lg-2">
                    <FloatingActionButton mini={true} style={style}>
                        <Previous />
                    </FloatingActionButton>

                    <FloatingActionButton style={style}>
                        <Play />
                    </FloatingActionButton>

                    <FloatingActionButton mini={true} style={style}>
                        <Next />
                    </FloatingActionButton>
                </div>
            </div>;      
    }
}

export default Player;