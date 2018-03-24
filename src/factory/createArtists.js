const path = require('path')
const createPostUrlFromArtistName = require('../utils')
  .createPostUrlFromArtistName

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    console.log('start creating Artist')
    const blogArtistTemplate = path.resolve('src/templates/blog-artist.js')
    resolve(
      graphql(`
        {
          allContentfulArtist {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulArtist.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromArtistName(edge.node.name),
            component: blogArtistTemplate,
            context: {
              name: edge.node.name,
            },
          })
        })
        return
      })
    )
  })
