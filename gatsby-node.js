const { createPosts, createArtists, createGenres } = require('./src/factory')

exports.createPages = params => {
  return Promise.all([
    createPosts(params),
    createArtists(params),
    createGenres(params),
  ])
}
