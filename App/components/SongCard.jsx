import React from 'react';
import ReactDOM from 'react-dom';
import '../content/css/song-card.css';

class SongCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPaused : false
        }
    }

    componentWillReceiveProps(nextProps){
        if (!nextProps.isLoading){
            this.SongLoaded();
        }
    }

    handleCardClick(event){
        var play = $(event.target);
        $(play).addClass('active').fadeOut();;
        $(play).parent().children('.circle-1').addClass('active');
        $(play).parent('.card').addClass('active');
        $(play).parent().children('.circle-2').addClass('active');
        $(play).parent().children('.spinner').delay(400).fadeIn();
 
        this.setState({isLoading : true});
        this.props.play();
    }

    SongLoaded(){
        this.setState({isLoading : false});

        $('.card.active').children('.spinner').fadeOut();
        setTimeout(() => $('.card.active').addClass('now-playing'), 600)
        

        //$('.card.active').children('.message').delay(4000).fadeIn();
        //$('.card.active span').removeClass('active').fadeIn();
        //$('.card.active').children('.circle-1').removeClass('active');
        //$('.card.active').children('.circle-2').removeClass('active');
        //$('.card.active').removeClass('active');
    }

    render() {
        return <div className="card" 
                    style={{backgroundImage : "url(" + this.props.artwork + ")"}}>

                    <h2>{this.props.title}</h2>
                    <p className="message">Oops, something went wrong :(    </p>
                    <span id="play" className="play" onClick={this.handleCardClick.bind(this)}></span>
                    
                    <span className="circle-1"></span>
                    <span className="circle-2"></span>
                    <span className="loader"></span>
                    <div className="spinner">
                        <svg className="load-circle" xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Livello_1" x="0px" y="0px" width="39.053px" height="36.653px" viewBox="0 0 39.053 36.653" enableBackground="new 0 0 39.053 36.653">
                            <path fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeMiterlimit="10" d="M11.989,32.312  c-4.463-2.599-7.463-7.435-7.463-12.972c0-8.283,6.716-15,15-15s15,6.717,15,15"></path>
                        </svg>
                    </div>
                </div>
    }
}

export default SongCard;