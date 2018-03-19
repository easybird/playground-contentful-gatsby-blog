const path = require('path')
const createPostUrlFromAuthorName = require('../utils')
  .createPostUrlFromAuthorName

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    console.log('start creating Author')
    const blogAuthorTemplate = path.resolve('src/templates/blog-author.js')
    resolve(
      graphql(`
        {
          allContentfulAuthor {
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
        result.data.allContentfulAuthor.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromAuthorName(edge.node.name),
            component: blogAuthorTemplate,
            context: {
              name: edge.node.name,
            },
          })
        })
        return
      })
    )
  })
