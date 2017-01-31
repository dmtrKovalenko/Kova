import { MapSCSong } from '../utils/SongMapper'

class SDK {
  searchTracks (filter) {
    return new Promise((resolve) => {
      window.SC.get('/tracks', {
        q: filter.query,
        linked_partitioning: 1,
        offset: 0,
        limit: filter.limit
      }).then(function (tracks) {
        const songs = tracks.collection.map(song => MapSCSong(song))
        console.log(songs)

        resolve(songs)
      })
    })
  }
}

export default SDK
