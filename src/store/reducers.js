import { combineReducers } from 'redux'
import locationReducer from './location'
import playerReducer from '../player-module/player'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    player: playerReducer,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
