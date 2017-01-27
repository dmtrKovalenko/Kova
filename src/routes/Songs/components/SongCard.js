import React from 'react'
import PoweredBySC from '../assets/powered-by-sc.png'
import '../styles/SongCard.scss'

class SongCard extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    if (this.props.isCurrent) {
      this.selectSong()
    } else {
      this.unSelectSong()
    }
  }

  handleCardClick = () => {
    this.props.onSelect()

    this.selectSong()
  }

  selectSong = () => {
    if (this.card) {
      this.card.classList.add('active')
      this.fab.style.backgroundImage = 'none'

      setTimeout(() => (this.card.classList.add('img-visible')), 550)
      setTimeout(() => this.card.classList.add('title-visible'), 480)
    }
  }

  unSelectSong = () => {
    if (this.card) {
      this.card.classList.remove('active')

      setTimeout(() => (this.card.classList.remove('img-visible')), 500)
      setTimeout(() => (this.card.classList.remove('title-visible')), 550)
      setTimeout(() => (this.fab.style.backgroundImage = ''), 700)
    }
  }

  render () {
    return <div ref={(ref) => { this.card = ref }}
      className='card'>
      <div className='main'
        style={{ backgroundImage : 'url(' + this.props.artwork + ')' }} />

      <div className='fab'
        ref={(ref) => { this.fab = ref }}
        onClick={this.handleCardClick} />

      <div className='fab-sha' />
      <div className='close'
        onClick={this.unSelectSong} />

      <img className='powered-logo'
        src={PoweredBySC} />

      <div ref={(ref) => { this.title = ref }}
        className='title-container'>
        <span className='user-name'> {this.props.userName} </span>
        <span className='title'> {this.props.title} </span>
      </div>
    </div>
  }
}

export default SongCard
