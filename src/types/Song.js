class Song {
  constructor (id, title, duration, streamUrl, artworkUrl, croppedArtworkUrl, user, songType) {
    this.id = id
    this.title = title
    this.duration = duration
    this.streamUrl = streamUrl
    this.artworkUrl = artworkUrl
    this.croppedArtworkUrl = croppedArtworkUrl
    this.user = user
    this.songType = songType
  }
}

export default Song
