import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dataSource: []
    }
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value ]
    })
  };

  search = (value) => {
    window.scrollTo(0,0);
    this.props.router.push({ pathname: '/songs', query: { q: value } })
  }

  render () {
    return (
      <div>
        <IconButton className='search-icon'>
          <SearchIcon />
        </IconButton>

        <div className='search-input'>
          <AutoComplete hintText='Search'
            fullWidth
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={this.search} />
        </div>
      </div>)
  }
}

export default SearchBar
