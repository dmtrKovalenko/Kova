import *  as types from '../constants/ActionTypes';

const ACTION_HANDLERS = {
    [types.PLAY_SONG] : (state, action) => {
        return Object.assign({}, state, {
            isPlaying : true,
            isPaused : false,
        });
    },

    [types.PAUSE_SONG] : (state, action) => {
        return Object.assign({}, state, {
            isPaused: true
        });
    },

    [types.SELECT_SONG] : (state, action) => {
        return Object.assign({}, state, {
            currentSongId: action.songId,
            playList: action.playList,
            isPlaying: true, 
            isPaused: false,
            playbackTime: 0,
            currentSongIndex: action.playList.findIndex(song => song.id == action.songId)
        });
    },

    [types.CHANGE_PLAYBACK_TIME] : (state, action ) => {
        return Object.assign({}, state, {
            playbackTime: action.payload
        });
    },

    [types.CHANGE_VOLUME] : (state, action) => {
        return Object.assign({}, state, {
            volume : action.volume
        });
    },

    [types.SEEK_STARTED]: (state, action) => {
        return Object.assign({}, state, {
            isSeeking: true,
        });
    },

    [types.SEEK]: (state, action) => {
        return Object.assign({}, state, {
            playbackTime: action.value
        });
    },

    [types.SEEK_ENDED]: (state, action) => {
        return Object.assign({}, state, {
            isSeeking: false,
        });
    },

    [types.PLAY_NEXT_SONG] : (state, action) => {
        return getUpdatedSongIndexState(state.currentSongIndex + 1, state);
    },

    [types.PLAY_PREVIOUS_SONG] : (state, action) => {
        return getUpdatedSongIndexState(state.currentSongIndex - 1, state);
    }
}

function getUpdatedSongIndexState(newIndex, state){
    const newSong = state.playList[newIndex];

    if(!newSong) {
        return state;
    }

    return Object.assign({}, state, {
        currentSongId: newSong.id,
        isPlaying: true,
        isPaused: false,
        currentSongIndex: newIndex,
        volume: 0
    });
}

const initialState = {
    isPaused : false,
    isPlaying : false,
    currentSongId : null,
    playbackTime : null,
    playList : null,
    currentSongIndex : null,
    isSeeking: false
}

export default function playerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
