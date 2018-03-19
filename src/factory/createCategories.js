const path = require('path')
const createPostUrlFromCategory = require('../utils').createPostUrlFromCategory

module.exports = ({ graphql, boundActionCreators: { createPage } }) =>
  new Promise((resolve, reject) => {
    console.log('start creating Posts')
    const blogCategoryTemplate = path.resolve('src/templates/blog-category.js')
    resolve(
      graphql(`
        {
          allContentfulCategory {
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
        result.data.allContentfulCategory.edges.forEach(edge => {
          createPage({
            path: createPostUrlFromCategory(edge.node.title),
            component: blogCategoryTemplate,
            context: {
              title: edge.node.title,
            },
          })
        })
        return
      })
    )
  })
