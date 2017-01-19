import React from 'react'
import '../../styles/PlayPauseIcon.scss'

const pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
const play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";

class PlayPauseToggleIcon extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps){
        if (this.props.isPaused != nextProps.isPaused){
            return true;
        }

        return false;
    }

    componentDidUpdate (){ 
        this.animationRef.setAttribute("from", this.props.isPaused ? play : pause);
        this.animationRef.setAttribute("to", this.props.isPaused ? pause : play);
        this.animationRef.beginElement();

        if(!this.props.isPaused){
            this.iconSvg.classList.add('playing');
        } else {
            this.iconSvg.classList.remove('playing');
        }
    }

    componentDidMount(){
        this.animationRef.beginElement();
    }

    render(){
        return (
            <div className="play-pause-btn-container control-button">
                <button onClick={this.props.onClick}
                        className="play-pause-btn">

                        <svg ref={ref => this.iconSvg = ref}
                             className="play-pause-svg playing"
                             width="100%" height="100%" 
                             viewBox="0 0 36 36" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" 
                             xmlnsXlink="http://www.w3.org/1999/xlink">

                            <defs>
                                <path id="ytp-12" d="M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26">
                                    <animate ref={ref => this.animationRef = ref}
                                             d="animation" begin="indefinite" fill="freeze"
                                             attributeType="XML" attributeName="d"
                                             from={pause} to={play} dur="0.1s"
                                             keySplines=".4 0 1 1" repeatCount="1">
                                    </animate>
                                </path>
                            </defs>
                            
                            <use xlinkHref="#ytp-12" className="ytp-svg-shadow"></use>
                            <use xlinkHref="#ytp-12" className="ytp-svg-fill"></use>
                        </svg>
                    </button>
              </div>
        );
    }
}

export default PlayPauseToggleIcon;