import User from '../types/User'
import Song from '../types/Song'
import * as SongTypes from '../constants/SongTypes'
import defaultImg from '../assets/default-artwork.jpg'
import smallDefaultImg from '../assets/default-artwork-small.jpg'

const SCStremUrl = 'https://api.soundcloud.com/tracks/%track.id%/stream?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c'
const trackIdToken = '%track.id%'

export function MapSCSong (track) {
  const user = new User(track.user.id, track.user.username)
  const artwork = getSCArtworks(track.artwork_url)
  const streamUrl = getStreamUrl(track.id.toString())

  const song = new Song(track.id, track.title, track.duration, streamUrl,
      artwork.artwork, artwork.croppedArtwork, user, SongTypes.SOUNDCLOUD)

  return song
}

function getSCArtworks (artworkUrl) {
  if (!artworkUrl) {
    const id = Math.floor(Math.random() * 6 + 1).toString();
    return { artwork : require(`../assets/${id}.jpg`), croppedArtwork: require(`../assets/${id}-cropped.jpg`) }
  }

  const artwork = artworkUrl.replace('large.jpg', 't300x300.jpg')
  const croppedArtwork = artworkUrl.replace('large.jpg', 't67x67.jpg')

  return { artwork: artwork, croppedArtwork: croppedArtwork }
}

function getStreamUrl (songId) {
  const url = SCStremUrl.replace(trackIdToken, songId)
  return url
}
