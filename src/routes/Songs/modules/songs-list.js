import * as types from '../constants/ActionTypes'
import SoundCloudSdk from '../../../SDKs/SoundCloudSDK'
import Immutable from 'immutable'

const SoundCloudSDK = new SoundCloudSdk()

export function songsLoaded (songs) {
  return {
    type: types.SONGS_LOADED,
    songs: songs
  }
}

export function songsLoading () {
  return {
    type: types.SONGS_LOADING_STARTED
  }
}

export function fetchSongs (filter) {
  return (dispatch) => {
    dispatch(songsLoading());
    SoundCloudSDK.searchTracks(filter)
            .then(songs => dispatch(songsLoaded(songs)))
  }
}

export const actions = {
  fetchSongs,
  songsLoaded
}

const ACTION_HANDLERS = {
  [types.SONGS_LOADED] : (state, action) => {
    return Object.assign({}, state, {
      songsList: Immutable.fromJS(action.songs),
      isLoading: false
    })
  },

  [types.SONGS_LOADING_STARTED] : (state, action) => {
    return Object.assign({}, state, {
      isLoading: true
    })
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
