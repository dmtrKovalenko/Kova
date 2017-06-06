import { MapSCSong } from '../utils/SongMapper'

export function searchTracks (query, filter) {
  return new Promise((resolve) => {
    window.SC.get('/tracks', {
      q: query,
      linked_partitioning: 1,
      offset: 0,
      limit: filter.limit,
      types: filter.type,
      bpm: filter.bpm,
      duration: filter.duration,
      tags: filter.genres ? filter.genres.toString() : undefined
    }).then(function (tracks) {
      const songs = tracks.collection.map(song => MapSCSong(song))
      console.log(songs)

      resolve(songs)
    })
  })
}

