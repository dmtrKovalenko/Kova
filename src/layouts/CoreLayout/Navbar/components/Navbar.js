import React, { PropTypes } from 'react'
import StickyNav from './StickyNav/StickyNavBar'
import SearchBar from './StickyNav/SearchBar'

const Navbar = props => {
  return (
    <StickyNav>
      <SearchBar
        router={props.router}
        filter={props.filter}
        changeFilter={props.changeFilter} />
    </StickyNav>
  )
}

Navbar.propTypes = {
  router: PropTypes.object,
  filter: PropTypes.string,
  changeFilter: PropTypes.func
}

export default Navbar
