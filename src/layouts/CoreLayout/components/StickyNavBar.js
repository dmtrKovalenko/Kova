import React from 'react'
import '../styles/StickyNavBar.scss'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconButton from 'material-ui/IconButton'
import LogoImg from '../../../assets/logo.png'
import SearchIcon from 'material-ui/svg-icons/action/search'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import Slogans from '../../../constants/MusicSlogans'

class StickyNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSmaller : false,
      isExpanded : false
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.isExpanded != this.state.isExpanded || 
      nextState.isSmaller != this.state.isSmaller
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
        isExpanded : false,
        isSmaller : false
      })
    }
  }

  showChildren = () => {
    if (this.state.isSmaller) {
      this.setState({ isExpanded : !this.state.isExpanded })
    }
  }

  getHeaderClassList () {
    const classList = []

    if (this.state.isExpanded) {
      classList.push('expanded')
    }

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
            
            <div className="app-title-container">
              <p className='app-title'> Kova </p>
            </div>

            <IconButton className='search-button'
              onClick={this.showChildren}>
              {
                  this.state.isExpanded
                    ? (<CloseIcon color='#fff' />)
                    : (<SearchIcon color={'#fff'} />)
              }

            </IconButton>
          </div>

        <img className='logo-img' src={LogoImg} />
        <h1 className='logo'> Kova  </h1>
        <h3 className='subheader'>
          { slogan }
        </h3>

        <div className='children'>
          {this.props.children}
        </div>
      </header>)
  }
}

export default StickyNavBar
