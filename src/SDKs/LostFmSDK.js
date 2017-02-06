/**
@param {String} method Name of LastFM api method
@param {Object} params Array of key-value objects, of LostFM api params */

function getUrl (method, params) {
  let stringParams = ''
  Object.keys(params).map((key) => {
    stringParams = stringParams.concat(`&${key}=${params[key]}`)
  })

  return `http://ws.audioscrobbler.com/2.0/?` +
    `api_key=6c3a39877d68d9a35900afe9a8f6d52e&format=json&method=${method}${stringParams}`
}

export function autocompleteTracks (query) {
  return new Promise((resolve) => {
    fetch(getUrl('track.search', { limit: 10, track: query }))
            .then(response => response.json())
                .then(data => {
                  resolve([...new Set(data.results.trackmatches.track.map(track => track.name))])
                })
  })
}
