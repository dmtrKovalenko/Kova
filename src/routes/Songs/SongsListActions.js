import * as types from './SongsListActionTypes'
import { searchTracks } from '../../SDKs/SoundCloudSDK'

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

export function fetchSongs (query, filter) {
  return (dispatch) => {
    dispatch(songsLoading())

    searchTracks(query, filter)
      .then(songs => dispatch(songsLoaded(songs)))
  }
}

export const actions = {
  fetchSongs,
  songsLoaded
}
