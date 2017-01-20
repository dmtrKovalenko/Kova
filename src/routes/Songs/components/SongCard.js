import React from 'react'
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

      setTimeout(() => this.title.classList.add('active'), 480)
    }
  }

  unSelectSong = () => {
    if (this.card) {
      this.card.classList.remove('active')

      setTimeout(() => (this.title.classList.remove('active')), 600)
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

      <div ref={(ref) => { this.title = ref }}
        className='title-container'>
        <span className='user-name'> {this.props.userName} </span>
        <span className='title'> {this.props.title} </span>
      </div>
    </div>
  }
}

export default SongCard
