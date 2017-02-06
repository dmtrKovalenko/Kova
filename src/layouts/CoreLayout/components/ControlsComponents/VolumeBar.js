import React from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'
import VolumeDown from 'material-ui/svg-icons/av/volume-down'
import VolumeUp from 'material-ui/svg-icons/av/volume-up'
import VolumeMute from 'material-ui/svg-icons/av/volume-mute'
import { cyan500 } from 'material-ui/styles/colors'

const volumeBarBaseClass= ['volume-slider-container', 'animated'];

class VolumeBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDisplaying : null
    }
  }

  shouldComponentUpdate(newProps, newState) {
     return this.state.isDisplaying != newState.isDisplaying;
  }

  showVolumeBar = () => {
    this.setState({ isDisplaying : !this.state.isDisplaying })
  }

  handleClickOutside () {
    if (this.state.isDisplaying != null) {
      this.setState({ isDisplaying:false })
    }
  }

  getVolumeBarClassList() {
    let classList = [...volumeBarBaseClass];

    if(this.state.isDisplaying == null) {
      classList.push('hidden')
    } else if (this.state.isDisplaying) {
      classList.push('bounceInUp')
    } else {
      classList.push('bounceOutDown')
    }

    return classList.join(' ');
  }

  render () {
    return (
      <div className='volume-bar'>
        <Paper className={this.getVolumeBarClassList()} zDepth={3}>
          <Slider style={{ height: 100 }}
            axis='y' min={0} max={1} defaultValue={0.5}
            onChange={(event, value) => this.props.onChange(value)} />
        </Paper>

        <IconButton onClick={this.showVolumeBar}>
          <VolumeUp color={cyan500} />
        </IconButton>
      </div>)
  }
}

export default enhanceWithClickOutside(VolumeBar)
