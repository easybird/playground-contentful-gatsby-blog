function urlify(url) {
  return url.split(' ').join('-')
}
module.exports = {
  createPostUrlFromSlug: slug => '/posts/' + urlify(slug),
  createPostUrlFromAuthorName: authorName => '/authors/' + urlify(authorName),
  createPostUrlFromCategory: category => '/categories/' + urlify(category),
}
