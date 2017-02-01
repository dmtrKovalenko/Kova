import { MapSCSong } from '../utils/SongMapper'
import * as FilterConstants from '../constants/FiltersConstants'

class SDK {
  searchTracks (query, filter) {
    return new Promise((resolve) => {
      window.SC.get('/tracks', {
        q: query,
        linked_partitioning: 1,
        offset: 0,
        limit: filter.limit,
        types: filter.type,
        bpm: filter.bpm,
        duration: filter.duration,
        genres: filter.genres ? filter.genres.toString() : undefined
      }).then(function (tracks) {
        const songs = tracks.collection.map(song => MapSCSong(song))
        console.log(songs)

        resolve(songs)
      })
    })
  } 
}

export default SDK
