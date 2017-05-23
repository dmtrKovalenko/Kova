import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'songs',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./SongsListReducer').default
      const SongsList = require('./SongsListContainer').default

      injectReducer(store, { key: 'songs', reducer })

      cb(null, SongsList)
    }, 'SongsList')
  }
})
