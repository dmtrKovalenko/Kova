import React from 'react';
import ReactDOM from 'react-dom';
import '../content/css/song-card.css';
import SDK from '../soundCloudSDK.jsx';
import defaultImg from '../content/img/night-default-artwork.png';
import Avatar from 'material-ui/Avatar';

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
        setTimeout(()=> this.title.classList.add('active'), 500)
        this.fab.style.backgroundImage = 'none';
    }

    unSelectSong(){
        this.card.classList.remove('active');
        setTimeout(()=> this.title.classList.remove('active'), 600)
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

                  <div ref={(ref) => { this.title = ref; }}
                       className="title-container">
                    <span className="user-name"> {this.props.userName} </span>
                    <span className="title"> {this.props.title} </span>
                  </div> 
               </div>
    }
}
 
export default SongCard;