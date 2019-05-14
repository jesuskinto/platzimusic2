import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { type, q }
  })
    .then(resp => resp.data)
}

export default trackService
