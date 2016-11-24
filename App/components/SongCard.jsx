import React from 'react';
import ReactDOM from 'react-dom';
import '../content/css/song-card.css';
import SDK from '../soundCloudSDK.jsx';

class SongCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive : false,
            isLoading: null,
        }
    }

    componentWillUpdate(nextProps, nextState){
        if (this.state.isActive && this.state.isLoading == false && this.props.isCurrent){
            this.setState({wasPlayed : true});
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.isCurrent && !this.state.wasPlayed && !this.state.isActive){
            this.playLoadAnimation();
        }
    }

    handleCardClick(event){
        this.props.play();
        this.playLoadAnimation();
    }

    playLoadAnimation(){
        this.setState({isActive : true, isLoading:true});
        setTimeout(() => this.setState({isLoading : false}), 1600);
    }

    getClassName(value){
        if(this.props.isCurrent){
            if (this.state.wasPlayed){
                return value + ' was-played active';
            }

            if(this.state.isActive && this.state.isLoading){
                return value + ' active';
            }

            if(this.state.isActive && this.state.isLoading == false){
                return value + ' active now-playing';
            }
        }

        if (this.state.wasPlayed){
            return value + ' was-played';
        }

        return value;
    }

    render() {
        return <div className={this.getClassName("card")} 
                    style={{backgroundImage : "url(" + this.props.artwork + ")"}}>
                    <h2>{this.props.title}</h2>
                    <p className="message">Oops, something went wrong :( </p>
                    <span id="play" className={this.getClassName("play")}  onClick={this.handleCardClick.bind(this)}></span>
                    <span className={this.getClassName("circle-1")}></span>
                    <span className={this.getClassName("circle-2")}></span>
                    <span className="loader"></span>
                    <div className={this.getClassName("spinner")}>
                        <svg className="load-circle" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Livello_1" x="0px" y="0px" width="39.053px" height="36.653px" viewBox="0 0 39.053 36.653" enableBackground="new 0 0 39.053 36.653">
                            <path fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="M11.989,32.312  c-4.463-2.599-7.463-7.435-7.463-12.972c0-8.283,6.716-15,15-15s15,6.717,15,15"></path>
                        </svg>
                    </div>
                </div>
    }
}
 
export default SongCard;