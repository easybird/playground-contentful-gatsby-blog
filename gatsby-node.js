const { createPosts, createArtists, createGenress } = require('./src/factory')

exports.createPages = params => {
  return Promise.all([
    createPosts(params),
    createArtists(params),
    createGenress(params),
  ])
}
