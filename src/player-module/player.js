import * as types from '../constants/ActionTypes'
import shuffle from '../utils/ArrayShuffler'

const ACTION_HANDLERS = {
  [types.PLAY_SONG] : (state, action) => {
    return Object.assign({}, state, {
      isPlaying : true,
      isPaused : false
    })
  },

  [types.PAUSE_SONG] : (state, action) => {
    return Object.assign({}, state, {
      isPaused: true
    })
  },

  [types.SELECT_SONG] : (state, action) => {
    const newSong = action.playList.find(song => song.id == action.songId)
    updateDocumentTitle(newSong.title)

    return Object.assign({}, state, {
      currentSongId: action.songId,
      currentStreamUrl: newSong.streamUrl,
      playList: action.playList,
      isPlaying: true,
      isPaused: false,
      playbackTime: 0,
      currentSongIndex: action.playList.indexOf(newSong)
    })
  },

  [types.CHANGE_PLAYBACK_TIME] : (state, action) => {
    return Object.assign({}, state, {
      playbackTime: action.payload
    })
  },

  [types.CHANGE_VOLUME] : (state, action) => {
    return Object.assign({}, state, {
      volume : action.volume
    })
  },

  [types.SEEK_STARTED]: (state, action) => {
    return Object.assign({}, state, {
      isSeeking: true
    })
  },

  [types.SEEK]: (state, action) => {
    return Object.assign({}, state, {
      playbackTime: action.value
    })
  },

  [types.SEEK_ENDED]: (state, action) => {
    return Object.assign({}, state, {
      isSeeking: false
    })
  },

  [types.PLAYBACK_ENDED]: (state, action) => {
    if (state.loop) {
      return Object.assign({}, state, {
        playbackTime: 0,
        isPaused: false
      })
    }

    return getUpdatedSongIndexState(state.currentSongIndex + 1, state)
  },

  [types.PLAY_NEXT_SONG] : (state, action) => {
    return getUpdatedSongIndexState(state.currentSongIndex + 1, state)
  },

  [types.PLAY_PREVIOUS_SONG] : (state, action) => {
    return getUpdatedSongIndexState(state.currentSongIndex - 1, state)
  },

  [types.SHUFFLE] : (state, action) => {
    const newPlayList = action.toShuffle
      ? shuffle(state.playList, state.currentSongIndex)
      : state.unShuffledPlayList

    const unShuffledPlayList = action.toShuffle
      ? state.playList
      : null

    return Object.assign({}, state, {
      shuffle: action.toShuffle,
      playList: newPlayList.slice(),
      currentSongIndex: newPlayList.findIndex(x => x.id == state.currentSongId),
      currentStreamUrl : null,
      unShuffledPlayList: unShuffledPlayList
    })
  },

  [types.LOOP] : (state, action) => {
    return Object.assign({}, state, {
      loop: action.toLoop
    })
  }
}

const getUpdatedSongIndexState = (newIndex, state) => {
  const newSong = state.playList[newIndex]

  if (!newSong) {
    return state
  }

  updateDocumentTitle(newSong.title)

  return Object.assign({}, state, {
    currentStreamUrl: newSong.streamUrl,
    currentSongId: newSong.id,
    isPlaying: true,
    isPaused: false,
    currentSongIndex: newIndex
  })
}

const updateDocumentTitle = (songTitle) => {
  document.title = songTitle
}

const initialState = {
  isPaused : false,
  isPlaying : false,
  currentSongId : null,
  playbackTime : null,
  playList : null,
  currentSongIndex : null,
  isSeeking: false,
  shuffle: false,
  loop: false
}

export default function playerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
