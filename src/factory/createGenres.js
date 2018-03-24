const path = require('path')
const createPostUrlFromGenre = require('../utils').createPostUrlFromGenre

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    console.log('start creating Posts')
    const blogGenreTemplate = path.resolve('src/templates/blog-genre.js')
    resolve(
      graphql(`
        {
          allContentfulGenre {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulGenre.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromGenre(edge.node.title),
            component: blogGenreTemplate,
            context: {
              title: edge.node.title,
            },
          })
        })
        return
      })
    )
  })
