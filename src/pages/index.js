import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import './index.css'

const tagStyle = { marginRight: '8px' }

const createUrlFromSlug = slug => '/posts/' + slug.split(' ').join('-')

const IndexPage = ({ data: { allContentfulPost: { edges } } }) => {
  const nodes = edges.map(({ node }) => {
    return (
      <div
        className="node"
        onClick={() => navigateTo(createUrlFromSlug(node.slug))}
      >
        <div className="title">
          <h4>{node.title.title}</h4>
        </div>
        {node.featuredImage && (
          <div className="image">
            <img src={node.featuredImage.resolutions.src} />
          </div>
        )}
        <div className="info-block">
          {node.author && (
            <div className="info">
              <span className="info-title">Author:</span>
              <Link to={node.author[0].name}>{node.author[0].name}</Link>
            </div>
          )}
          {node.category && (
            <div className="info">
              <span className="info-title">Category:</span>
              <Link to={node.category[0].title}>{node.category[0].title}</Link>
            </div>
          )}
        </div>

        {node.tags && (
          <div className="tags">
            {node.tags.map(tag => (
              <Link style={tagStyle} to={'/' + tag}>
                {tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  })
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '50px',
      }}
    >
      {nodes}
      {nodes}
      {nodes}
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
          date
          tags
          author {
            name
          }
          category {
            title
          }
          featuredImage {
            resolutions {
              src
            }
          }
        }
      }
    }
  }
`
