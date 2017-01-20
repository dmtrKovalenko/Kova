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

export function fetchSongs (filter) {
  return (dispatch) => {
    return SoundCloudSDK.searchTracks(filter)
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
      songsList: Immutable.fromJS(action.songs)
    })
  }
}

const initialState = {
  songsList : null
}

export default function songsListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
