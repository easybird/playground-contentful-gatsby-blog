import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromAuthorName } from '../utils'

const AuthorPage = ({ data: { allContentfulAuthor: { edges } } }) => {
  console.log('author', edges)
  return (
    <div>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h1>
            <Link to={createPostUrlFromAuthorName(node.name)}>{node.name}</Link>
          </h1>
          <h4>{node.website}</h4>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default AuthorPage

export const query = graphql`
  query AuthorContent {
    allContentfulAuthor {
      edges {
        node {
          id
          name
          website
        }
      }
    }
  }
`
