function urlify(url) {
  return url.split(' ').join('-')
}
module.exports = {
  createPostUrlFromSlug: slug => '/posts/' + urlify(slug),
  createPostUrlFromArtistName: artistName => '/artists/' + urlify(artistName),
  createPostUrlFromGenre: genre => '/genres/' + urlify(genre),
}
