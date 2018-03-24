const { createPosts, createArtists, creategenres } = require('./src/factory')

exports.createPages = params => {
  return Promise.all([
    createPosts(params),
    createArtists(params),
    creategenres(params),
  ])
}
