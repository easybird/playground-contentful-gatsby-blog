const {
  createPosts,
  createAuthors,
  createCategories,
} = require('./src/factory')

exports.createPages = params => {
  return Promise.all([
    createPosts(params),
    createAuthors(params),
    createCategories(params),
  ])
}
