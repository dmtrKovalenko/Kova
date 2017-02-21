import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import FilterIcon from 'material-ui/svg-icons/image/tune'
import FilterModal from '../Filter/FilterModal'
import { autocompleteTracks } from '../../../../../SDKs/LostFmSDK'
import '../../styles/SearchBar.scss'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

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
    autocompleteTracks(value).then(values => {
      this.setState({ dataSource: values })
      console.log(values)
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
          <SearchIcon color={'#857f7f'} />
        </IconButton>

        <div className='search-input'>
          <AutoComplete hintText='Search' fullWidth
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            filter={() => true} // show all search results, withou filters
            onNewRequest={this.search} />
        </div>

        <IconButton className='filter-icon'>
          <FilterIcon onClick={this.handleFiltersOpen} color={'#857f7f'} />
        </IconButton>

        <FilterModal filterOpen={this.state.filterOpen}
          filter={this.props.filter}
          handleFiltersClose={this.handleFiltersClose}
          changeFilter={this.props.changeFilter} />
      </div>)
  }
}

export default SearchBar
