import React from 'react';
import '../content/css/play-pause-icon.css';

const PlayPauseToggleIcon = props => (
    <div className={props.className}>
        <div className="play-icon-container">
            <div className="left"></div>
                <div className="right"></div>
                <div className="triangle-1"></div>
            <div className="triangle-2"></div>
        </div>
    </div>
);

export default PlayPauseToggleIcon;