import { injectReducer } from '../../store/reducers'
import { combineReducers } from 'redux'

export default (store) => ({
  path : 'songs',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SongsList = require('./containers/SongsListContainer').default;

      const reducer = require('./modules/songs-list').default;
      
      injectReducer(store, { key: 'songs', reducer })

      cb(null, SongsList)
    }, 'SongsList')
  }
})
