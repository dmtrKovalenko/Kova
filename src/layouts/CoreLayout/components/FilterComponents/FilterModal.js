import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as filterConstants from '../../../../constants/FiltersConstants'
import '../../styles/Filters.scss'

const FilterModal = (props) => {
    let duration, license, genres, dateCreated;
    const listStyle = {width: 230};

    const actions = [
        <FlatButton label="Cancel" primary={true} onTouchTap={props.handleFiltersClose}/>,
        <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={submitFilters}/>
    ];

    const submitFilters = () => {
        
    }

    const genresChip = filterConstants.genresList.map(genre =>
        <Chip className="genre-chip"> {genre} </Chip>)
    
    const typesItems = filterConstants.types.map(type => 
        <MenuItem value={type} primaryText={type}/> )

    const bpmItmes = Object.keys(filterConstants.bpm).map(key =>
        <MenuItem value={key} primaryText={key}/>)
    
    const durationItems = filterConstants.durations.map(duration => 
        <MenuItem value={duration} primaryText={duration}/>)

    return (
        <Dialog title="Filters"
          modal={false}
          autoScrollBodyContent={true}
          open={props.filterOpen}
          onRequestClose={props.handleFiltersClose}
          actions={actions}>
            <div className="selects-container">
                <div className="select-block">
                    <SelectField floatingLabelText="Track type" value={"All"} style={listStyle}>
                        {typesItems}
                    </SelectField> 
                </div>

                <div className="select-block">
                    <SelectField floatingLabelText="Temp" value={"All"} style={listStyle}>
                        {bpmItmes}
                    </SelectField> 
                </div> 

                <div className="select-block">
                    <SelectField floatingLabelText="Duration" value={"All"} style={listStyle}>
                        {durationItems}
                    </SelectField> 
                </div> 
            </div>

            <h3 className="title">Genres</h3> 
            <div className="genres-container">
                {genresChip}
            </div>
        </Dialog>
    )
}

export default FilterModal