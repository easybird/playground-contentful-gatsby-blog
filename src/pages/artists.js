import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromArtistName } from '../utils'

const ArtistPage = ({ data: { allContentfulArtist: { edges } } }) => {
  console.log('artist', edges)
  return (
    <div>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h1>
            <Link to={createPostUrlFromArtistName(node.name)}>{node.name}</Link>
          </h1>
          <h4>{node.website}</h4>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ArtistPage

export const query = graphql`
  query ArtistContent {
    allContentfulArtist {
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
