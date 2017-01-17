import *  as types from '../constants/ActionTypes';

export function play() {
    return {
        type : types.PLAY_SONG
    }
}

export function pause() {
    return {
        type : types.PAUSE_SONG
    }
}

export function changePlaybackTime(newTime) { 
    return {
        type : types.CHANGE_PLAYBACK_TIME,
        payload: newTime
    }
}

export function selectSong(songId, playList) {
    return {
        type : types.SELECT_SONG,
        songId : songId,
        playList : playList
    }
}

export function playNextSong(){
    return {
        type: types.PLAY_NEXT_SONG
    }
}

export function playPreviousSong(){
    return {
        type: types.PLAY_PREVIOUS_SONG
    }
}

export function changeVolume(newValue){
    return { 
        type: types.CHANGE_VOLUME,
        volume: newValue
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