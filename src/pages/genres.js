import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromGenre } from '../utils'

const GenrePage = ({ data: { allContentfulGenre: { edges } } }) => {
  console.log('genre', edges)
  return (
    <div>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h1>
            <Link to={createPostUrlFromGenre(node.title)}>{node.title}</Link>
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

export default GenrePage

export const query = graphql`
  query GenreContent {
    allContentfulGenre {
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
