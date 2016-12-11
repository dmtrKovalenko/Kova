import React from 'react';
import ReactDOM from 'react-dom';
import '../content/css/song-card.css';
import SDK from '../soundCloudSDK.jsx';
import defaultImg from '../content/img/night-default-artwork.png';

class SongCard extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.isCurrent){
            this.selectSong();
        } else {
            this.unSelectSong();
        }
    }

    handleCardClick(){
        this.props.play();
        this.selectSong();
    }

    selectSong(){
        this.card.classList.add('active');
        this.fab.style.backgroundImage = 'none';
    }

    unSelectSong(){
        this.card.classList.remove('active');
        setTimeout(()=>this.fab.style.backgroundImage = 'url(content/img/card-play.png)', 700)
    }

    render() {
        return <div ref={(ref) => { this.card = ref; }}
                    className="card">
                   <div className="main"
                        style={{backgroundImage : "url(" + this.props.artwork + ")"}}>
                   </div>

                   <div className="fab"
                        ref = {(ref) => {this.fab = ref}}
                        onClick={this.handleCardClick.bind(this)}></div>

                   <div className="fab-sha"></div>
                   <div className="close"
                        onClick={this.unSelectSong.bind(this)}></div>
               </div>
    }
}
 
export default SongCard;