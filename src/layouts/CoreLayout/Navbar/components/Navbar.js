import React from 'react'
import StickyNav from './StickyNav/StickyNavBar'
import SearchBar from './StickyNav/SearchBar'

const Navbar = props => {
  return (
    <StickyNav>
      <SearchBar router={props.router}
        filter={props.filter}
        changeFilter={props.changeFilter} />
    </StickyNav>
  )
}

export default Navbar
