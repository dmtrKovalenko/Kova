import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import GenreChip from './GenreChip'
import FilterSelect from './FilterSelect'
import MenuItem from 'material-ui/MenuItem'
import * as filterConstants from '../../../../constants/FiltersConstants'
import '../../styles/Filters.scss'

class FilterModal extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      type : props.filter.type,
      duration: props.filter.duration,
      temp: props.filter.temp,
      selectedGenres : props.filter.genres || []
    }
  }

  submitFilters = () => {
    const selectedTemp = filterConstants.bpm.find(x => x.id == this.state.temp)
    const selectedDuration = filterConstants.durations.find(x => x.id == this.state.duration)

    const newFilter = Object.assign({}, this.props.filter, {
      type : this.state.type == -1 ? undefined : this.state.type,
      genres: this.state.selectedGenres.length > 0
                ? this.state.selectedGenres : undefined,
      bpm : selectedTemp
                ? { from: selectedTemp.value.from, to: selectedTemp.value.to } : undefined,
      duration : selectedDuration
                ? { from: selectedDuration.value.from, to: selectedDuration.value.to } : undefined
    })

    this.props.changeFilter(newFilter)
    this.props.handleFiltersClose()
  }

  handleGenreChipClick = (genre) => {
    const selectedIndex = this.state.selectedGenres.indexOf(genre)

    if (selectedIndex != -1) {
      this.setState({ selectedGenres :
                this.state.selectedGenres.slice(0, selectedIndex)
                    .concat(this.state.selectedGenres.slice(selectedIndex + 1))
      })
    } else {
      this.setState({
        selectedGenres : this.state.selectedGenres.concat([genre])
      })
    }
  }

  render () {
    const actions = [
      <FlatButton label='Cancel' primary onTouchTap={this.props.handleFiltersClose} />,
      <FlatButton label='Submit' primary keyboardFocused onTouchTap={this.submitFilters} />
    ]

    const genresChip = filterConstants.genresList.map((genre, index) =>
            (<GenreChip key={index}
              genreName={genre}
              onChoose={() => this.handleGenreChipClick(genre)}
              isSelected={this.state.selectedGenres.indexOf(genre) != -1} />))

    const defaultSelectItem = <MenuItem value={-1} primaryText={'All'} />

    const typesItems = filterConstants.types.map(type =>
      <MenuItem value={type} primaryText={type} />)
    typesItems.unshift(defaultSelectItem)

    const bpmItmes = filterConstants.bpm.map(item =>
      <MenuItem value={item.id} primaryText={item.text} />)
    bpmItmes.unshift(defaultSelectItem)

    const durationItems = filterConstants.durations.map(item =>
      <MenuItem value={item.id} primaryText={item.text} />)
    durationItems.unshift(defaultSelectItem)

    return (
      <Dialog title='Filters' modal={false}
        autoScrollBodyContent
        open={this.props.filterOpen}
        onRequestClose={this.props.handleFiltersClose}
        actions={actions}>
        <div className='selects-container'>
          <FilterSelect label='Track type'
            items={typesItems} value={this.state.type}
            onChange={(value) => this.setState({ type: value })} />

          <FilterSelect label='Temp'
            items={bpmItmes} value={this.state.temp}
            onChange={(value) => this.setState({ temp: value })} />

          <FilterSelect label='Duration'
            items={durationItems} value={this.state.duration}
            onChange={(value) => this.setState({ duration: value })} />
        </div>

        <h3 className='title'>Genres</h3>
        <div className='genres-container'>
          {genresChip}
        </div>
      </Dialog>)
  }
}

export default FilterModal
