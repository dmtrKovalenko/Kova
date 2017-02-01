import React from 'react' 
import Chip from 'material-ui/Chip'
import {blue200} from 'material-ui/styles/colors';

const GenreChip = (props) => {
    return (
        <Chip className="genre-chip"
            onTouchTap={props.onChoose}
            backgroundColor={props.isSelected ? '#EC407A' : null}
            labelColor={props.isSelected ? '#FFF' : null}> 
                {props.genreName} 
        </Chip>)
}

export default GenreChip;