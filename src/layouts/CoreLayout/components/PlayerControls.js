import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import PlayPauseIcon from './ControlsComponents/PlayPauseIcon'
import VolumeBar from './ControlsComponents/VolumeBar'
import Previous from 'material-ui/svg-icons/av/skip-previous'
import Slider from 'material-ui/Slider'
import Next from 'material-ui/svg-icons/av/skip-next'
import Avatar from 'material-ui/Avatar'
import Shuffle from 'material-ui/svg-icons/av/shuffle'
import Loop from 'material-ui/svg-icons/av/loop'
import Checkbox from 'material-ui/Checkbox'
import { formatMS, formatSS } from '../../../utils/TimeHelper'
import '../styles/Controls.scss'

const floatButtonClassName = 'control-button'

const styles = {
  CheckboxStyle : { display: 'inline-block', width: 25, marginLeft: 5 },
  IconStyle : { fill: '#857f7f' }
}

const checkCheckbox = (event, isChecked, callback) => {
  isChecked
      ? event.target.classList.add('checked')
      : event.target.classList.remove('checked')

  callback(isChecked)
}

export const PlayerControls = (props) => {
  if (props.currentSong && props.isPlaying) {
    return (
      <div className='player animated slideInUp'>
        <div className='artwork flex-container'>
          <Avatar src={props.currentSong.artworkUrl} size={60} />
        </div>

        <div className='title flex-container'>
          <a className='player-song-title'> {props.currentSong.title} </a>
          <a className='player-user-name'> {props.currentSong.user.name} </a>
        </div>

        <div className='slider flex-container'>
          <div className='current time'>
            {formatSS(props.playbackTime)}
          </div>

          <div className='slider-container'>
            <Slider
              sliderStyle={{ marginBottom:0, marginTop:30 }}
              max={props.currentSong.duration / 1000}
              value={props.playbackTime}
              onDragStart={props.seekStarted}
              onChange={(event, value) => props.seek(value)}
              onDragStop={props.seeked} />
          </div>

          <div className='duration time'>
            {formatMS(props.currentSong.duration)}
          </div>
        </div>

        <div className='controls flex-container'>
          <VolumeBar onChange={props.changeVolume} />

          <FloatingActionButton mini className={floatButtonClassName}
            onClick={props.playPreviousSong}>
            <Previous />
          </FloatingActionButton>

          <PlayPauseIcon isPaused={props.isPaused}
            onClick={() => props.playPause(props.isPaused)} />

          <FloatingActionButton mini
            onClick={props.playNextSong}>
            <Next />
          </FloatingActionButton>

          <span className='additional-controls'>
            <Checkbox
              style={styles.CheckboxStyle}
              iconStyle={styles.IconStyle}
              checkedIcon={<Shuffle />}
              uncheckedIcon={<Shuffle />}
              onCheck={(ev, isChecked) => checkCheckbox(ev, isChecked, props.shuffle)} />

            <Checkbox
              style={styles.CheckboxStyle}
              iconStyle={styles.IconStyle}
              checkedIcon={<Loop />}
              uncheckedIcon={<Loop />}
              onCheck={(ev, isChecked) => checkCheckbox(ev, isChecked, props.loop)} />
          </span>
        </div>
      </div>)
  } else {
    return null
  }
}

export default PlayerControls
