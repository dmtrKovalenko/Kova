class Filter {
  //let undefined if not need to apperent value in url
  constructor (limit, type, durationFrom, durationTo, genre, bpmFrom, bpmTo) {
    this.limit = limit || 50;
    this.type = type;
    this.genre = genre;
    this.bpm = { from: bpmFrom, to : bpmTo};
    this.duration = {from: durationFrom, to : durationTo}
  }
}

export default Filter
