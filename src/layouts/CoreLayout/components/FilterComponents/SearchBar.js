import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import FilterIcon from 'material-ui/svg-icons/image/tune'
import FilterModal from './FilterModal'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dataSource: [],
      filterOpen: false
    }
  } 

  handleFiltersClose = () => {
    this.setState({filterOpen: false});
  };

  handleFiltersOpen = () => {
    this.setState({filterOpen: true});
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value ]
    })
  };

  search = (value) => {
    window.scrollTo(0, 0)
    this.props.router.push({ pathname: '/songs', query: { q: value } })
  }

  render () {
    return (
      <div>
        <IconButton className='search-icon'>
          <SearchIcon />
        </IconButton>

        <div className='search-input'>
          <AutoComplete hintText='Search' fullWidth
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.search} />
        </div>

        <IconButton className='search-icon'>
          <FilterIcon onClick={this.handleFiltersOpen}/>
        </IconButton>
        <FilterModal filterOpen={this.state.filterOpen}
          filter={this.props.filter}
          handleFiltersClose={this.handleFiltersClose}
          changeFilter={this.props.changeFilter} />
      </div>)
  }
}

export default SearchBar
