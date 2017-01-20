export function formatSS (ss) {
  let seconds = parseInt(ss % 60)
  let minutes = parseInt((ss % 3600) / 60)

  minutes = (minutes < 10) ? '0' + minutes : minutes
  seconds = (seconds < 10) ? '0' + seconds : seconds

  return `${minutes}:${seconds}`
}

export function formatMS (ms) {
  return formatSS(ms / 1000)
}
