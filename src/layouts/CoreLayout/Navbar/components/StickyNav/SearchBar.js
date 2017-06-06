import React, { PropTypes } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import FilterIcon from 'material-ui/svg-icons/image/tune'
import FilterModal from '../Filter/FilterModal'
import { autocompleteTracks } from '../../../../../SDKs/LostFmSDK'
import { throttle } from '../../../../../utils/CommonFunctions'
import '../../styles/SearchBar.scss'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.handleUpdateInput = throttle(this.handleUpdateInput, 200)
    this.state = {
      dataSource: [],
      filterOpen: false
    }
  }

  handleFiltersClose = () => {
    this.setState({ filterOpen: false })
  };

  handleFiltersOpen = () => {
    this.setState({ filterOpen: true })
  };

  handleUpdateInput = (value) => {
    if (value) {
      autocompleteTracks(value)
        .then(values => this.setState({ dataSource: values }))
    }
  };

  search = (value) => {
    window.scrollTo(0, 0)
    this.props.router.push({ pathname: '/songs', query: { q: value } })
  }

  render () {
    return (
      <div>
        <IconButton className='search-icon'>
          <SearchIcon color={'#857f7f'} />
        </IconButton>

        <div className='search-input'>
          <AutoComplete
            fullWidth
            hintText='Search'
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            filter={() => true} // show all search results, withou filters
            onNewRequest={this.search} />
        </div>

        <IconButton className='filter-icon'>
          <FilterIcon
            color={'#857f7f'}
            onClick={this.handleFiltersOpen} />
        </IconButton>

        <FilterModal
          filter={this.props.filter}
          filterOpen={this.state.filterOpen}
          handleFiltersClose={this.handleFiltersClose}
          changeFilter={this.props.changeFilter} />
      </div>
    )
  }
}

SearchBar.propTypes = {
  router: PropTypes.object,
  filter: PropTypes.object,
  changeFilter: PropTypes.func
}

export default SearchBar
