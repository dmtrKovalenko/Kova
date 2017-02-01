import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FilterSelect from './FilterSelect'
import * as filterConstants from '../../../../constants/FiltersConstants'
import '../../styles/Filters.scss'

class FilterModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres : props.filter.genres,
            type : props.filter.type,
            duration: props.filter.duration, 
            temp: props.filter.temp
        }
    }

    submitFilters = () => {
        const selectedTemp = filterConstants.bpm.find(x => x.id == this.state.temp)
        const selectedDuration = filterConstants.durations.find(x => x.id == this.state.duration)

        const newFilter = Object.assign({}, this.props.filter, {
            genres: this.state.genres,
            type : this.state.type == -1 ? undefined : this.state.type,
            bpm : selectedTemp ? 
                { from: selectedTemp.value.from, to: selectedTemp.value.to } : undefined,
            duration : selectedDuration ?
                { from: selectedDuration.value.from, to: selectedDuration.value.to} : undefined
        });

        this.props.changeFilter(newFilter);
        this.props.handleFiltersClose();
    }

    render() {
        const actions = [
            <FlatButton label="Cancel" primary={true} onTouchTap={this.props.handleFiltersClose}/>,
            <FlatButton label="Submit" primary={true} keyboardFocused={true} onTouchTap={this.submitFilters}/>
        ];

        const defaultSelectItem = <MenuItem value={-1} primaryText={'All'}/>;

        const genresChip = filterConstants.genresList.map(genre =>
            <Chip className="genre-chip"> {genre} </Chip>)

        const typesItems = filterConstants.types.map(type => 
            <MenuItem value={type} primaryText={type}/> )
        typesItems.unshift(defaultSelectItem)
       
        const bpmItmes = filterConstants.bpm.map(item =>
            <MenuItem value={item.id} primaryText={item.text}/>)
        bpmItmes.unshift(defaultSelectItem)

        const durationItems = filterConstants.durations.map(item => 
            <MenuItem value={item.id} primaryText={item.text}/>)
        durationItems.unshift(defaultSelectItem)

        return (
            <Dialog title="Filters" modal={false}
                autoScrollBodyContent={true}
                open={this.props.filterOpen}
                onRequestClose={this.props.handleFiltersClose}
                actions={actions}>
                <div className="selects-container">
                    <FilterSelect label="Track type"
                        items={typesItems} value={this.state.type}
                        onChange={(value) => this.setState({type: value}) } />

                    <FilterSelect label="Temp"
                        items={bpmItmes} value={this.state.temp}
                        onChange={(value) => this.setState({temp: value}) } />

                    <FilterSelect label="Duration"
                        items={durationItems} value={this.state.duration}
                        onChange={(value) => this.setState({duration: value}) } />
                </div>

                <h3 className="title">Genres</h3> 
                <div className="genres-container">
                    {genresChip}
                </div>
            </Dialog>)  
    }
}

export default FilterModal