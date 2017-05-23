import * as types from './SongsListActionTypes'

import Immutable from 'immutable'

const ACTION_HANDLERS = {
  [types.SONGS_LOADED] : (state, action) => {
    return { ...state,
      songsList: Immutable.fromJS(action.songs),
      isLoading: false
    }
  },

  [types.SONGS_LOADING_STARTED] : (state, action) => {
    return { ...state,
      isLoading: true
    }
  }
}

const initialState = {
  songsList : null,
  isLoading : true
}

export default function songsListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
