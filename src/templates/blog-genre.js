import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogGenre extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      icon,
      shortDescription,
      post,
    } = this.props.data.contentfulGenre
    return (
      <div>
        <h1
          style={{
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          {title}
        </h1>
        <div>
          <Img sizes={icon.sizes} />
        </div>
        <hr />
        <h3>{shortDescription && shortDescription.shortDescription}</h3>
        <PostOverview nodes={post} />
      </div>
    )
  }
}

BlogGenre.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogGenre

export const pageQuery = graphql`
  query blogGenreQuery($title: String!) {
    contentfulGenre(title: { eq: $title }) {
      id
      title
      icon {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      shortDescription {
        shortDescription
      }
      post {
        ...IndexPostFragment
      }
    }
  }
`
