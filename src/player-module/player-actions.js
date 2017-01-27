import * as types from '../constants/ActionTypes'

export function play () {
  return {
    type : types.PLAY_SONG
  }
}

export function pause () {
  return {
    type : types.PAUSE_SONG
  }
}

export function changePlaybackTime (newTime) {
  return {
    type : types.CHANGE_PLAYBACK_TIME,
    payload: newTime
  }
}

export function selectSong (songId, playList) {
  return {
    type : types.SELECT_SONG,
    songId : songId,
    playList : playList
  }
}

export function playNextSong () {
  return {
    type: types.PLAY_NEXT_SONG
  }
}

export function playPreviousSong () {
  return {
    type: types.PLAY_PREVIOUS_SONG
  }
}

export function changeVolume (newValue) {
  return {
    type: types.CHANGE_VOLUME,
    volume: newValue
  }
}

export function seekStarted () {
  return {
    type: types.SEEK_STARTED
  }
}

export function seek (value) {
  return {
    type: types.SEEK,
    value: value
  }
}

export function seeked () {
  return {
    type: types.SEEK_ENDED
  }
}

export function shuffle (toShuffle) {
  return {
    type: types.SHUFFLE,
    toShuffle : toShuffle
  }
}

export function loop (toLoop) {
  return {
    type: types.LOOP,
    toLoop : toLoop
  }
}

export function playbackEnded () {
  return {
    type: types.PLAYBACK_ENDED
  }
}

export const actions = {
  play,
  pause,
  changePlaybackTime,
  playNextSong,
  playPreviousSong,
  changeVolume
}
