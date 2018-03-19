import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data: { allContentfulPost: { edges } } }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {edges.map(({ node }) => {
        return (
          <div>
            <h4>{node.title.title}</h4>
            <h5>{node.slug}</h5>
            {node.tags &&
              node.tags.map(tag => <Link to={'/' + tag}>{tag}</Link>)}
            <p>{node.body.body}</p>
          </div>
        )
      })}
      <p>{JSON.stringify(edges)}</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query BasicContent {
    allContentfulPost {
      edges {
        node {
          id
          title {
            title
          }
          body {
            body
          }
          slug
          tags
        }
      }
    }
  }
`
