import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromCategory } from '../utils'

const CategoryPage = ({ data: { allContentfulCategory: { edges } } }) => {
  console.log('category', edges)
  return (
    <div>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h1>
            <Link to={createPostUrlFromCategory(node.title)}>{node.title}</Link>
          </h1>
          <h4>
            {node.shortDescription && node.shortDescription.shortDescription}
          </h4>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default CategoryPage

export const query = graphql`
  query CategoryContent {
    allContentfulCategory {
      edges {
        node {
          id
          title
          shortDescription {
            shortDescription
          }
        }
      }
    }
  }
`
