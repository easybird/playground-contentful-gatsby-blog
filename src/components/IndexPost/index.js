import React, { PropTypes } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import {
  createPostUrlFromSlug,
  createPostUrlFromArtistName,
  createPostUrlFromGenre,
} from '../../utils'
import './index.css'

const tagStyle = { marginRight: '8px' }

const IndexPost = ({ node }) => {
  return (
    <div className="node" to={createPostUrlFromSlug(node.slug)}>
      <Link to={createPostUrlFromSlug(node.slug)}>
        <div className="title">
          <h4>{node.title.title}</h4>
        </div>
        {node.featuredImage && (
          <div className="image">
            <img src={node.featuredImage.resolutions.src} />
          </div>
        )}
      </Link>
      <div className="info-block">
        {node.author && (
          <div className="info">
            <span className="info-title">Artist:</span>
            <Link to={createPostUrlFromArtistName(node.author[0].name)}>
              {node.author[0].name}
            </Link>
          </div>
        )}
        {node.category && (
          <div className="info">
            <span className="info-title">Genre:</span>
            <Link to={createPostUrlFromGenre(node.category[0].title)}>
              {node.category[0].title}
            </Link>
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
}
export default IndexPost

export const query = graphql`
  fragment IndexPostFragment on ContentfulPost {
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
`
