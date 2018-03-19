const path = require('path')
const createPostUrlFromSlug = require('../utils').createPostUrlFromSlug

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    console.log('start creating Posts')
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulPost(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromSlug(edge.node.slug),
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
