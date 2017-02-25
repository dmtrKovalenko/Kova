import { connect } from 'react-redux'
import * as actions from '../../../player-module/player-actions'

import Navbar from './components/Navbar'

const mapDispatchToProps = {
  changeFilter: actions.changeFilter
}

const mapStateToProps = (state) => ({
  filter: state.player.filter
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
