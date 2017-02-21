import React from 'react'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Popover from 'material-ui/Popover'
import SearchIcon from 'material-ui/svg-icons/action/search'
import Slogans from '../../../../../constants/MusicSlogans'
import LogoImg from '../../../../../assets/logo.png'
import '../../styles/StickyNavBar.scss'

class StickyNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSmaller : false,
      isExpanded : false,
      searchOpen : false
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (
      nextState.isExpanded != this.state.isExpanded ||
      nextState.isSmaller != this.state.isSmaller ||
      nextState.searchOpen != this.state.searchOpen)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 100 && !this.state.isSmaller) {
      this.setState({
        isSmaller : true
      })
    } else if (window.scrollY < 100 && this.state.isSmaller) {
      this.setState({
        isSmaller : false,
        searchOpen : false
      })
    }
  }

  openSearch = (event) => {
    if (this.state.isSmaller) {
      // This prevents ghost click.
      event.preventDefault()

      this.setState({
        searchOpen: true,
        anchorEl: event.currentTarget
      })
    }
  };

  closeSearch = () => {
    this.setState({
      searchOpen: false
    })
  };

  getHeaderClassList () {
    const classList = []

    if (this.state.isSmaller) {
      classList.push('smaller')
    }

    return classList.join(' ')
  }

  getRandomSlogan () {
    var index = Math.floor(Math.random() * (Slogans.length))

    return Slogans[index]
  }

  render () {
    const headerClass = this.getHeaderClassList()
    const slogan = this.getRandomSlogan()

    return (
      <header className={headerClass}>
        <div className='top-bar'>
          <IconButton className='hamburger-btn'>
            <MenuIcon color={'#fff'} />
          </IconButton>

          <div className='app-title-container'>
            <p className='app-title'> Kova </p>
          </div>

          <IconButton className='search-button'
            onTouchTap={this.openSearch}>
            <SearchIcon color={'fff'} />
          </IconButton>

          <Popover className='search-bar popover-search'
            open={this.state.searchOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'right', vertical: 'center' }}
            targetOrigin={{ horizontal: 'right', vertical: 'center' }}
            onRequestClose={this.closeSearch} >
            {this.props.children}
          </Popover>
        </div>

        <img className='logo-img' src={LogoImg} />
        <h1 className='logo'> Kova </h1>
        <h3 className='subheader'>
          { slogan }
        </h3>

        <div className='children'>
          <Paper zDepth={2} className='search-bar'>
            {this.props.children}
          </Paper>
        </div>
      </header>)
  }
}

export default StickyNavBar
