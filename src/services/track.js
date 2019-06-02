import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { type, q }
  })
    .then(resp => resp.data)
}

trackService.getById = function (id) {
  return platziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
