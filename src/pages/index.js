import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import { createPostUrlFromSlug, createPostUrlFromArtistName } from '../utils'
import PostOverview from '../components/PostOverview'

const IndexPage = ({ data: { allContentfulPost: { edges } } }) => {
  return <PostOverview nodes={edges} />
}

export default IndexPage

export const query = graphql`
  query BasicContent {
    allContentfulPost {
      edges {
        node {
          ...IndexPostFragment
        }
      }
    }
  }
`
