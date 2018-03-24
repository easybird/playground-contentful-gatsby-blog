import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogArtist extends Component {
  render() {
    console.log(this.props)
    const {
      name,
      profilePhoto,
      biography,
      website,
      post,
    } = this.props.data.contentfulArtist
    return (
      <div>
        <h1
          style={{
            borderBottom: '1px solid #ccc',
            paddingBottom: '0.5rem',
          }}
        >
          {name}
        </h1>
        <p>{website}</p>
        <div>
          <Img sizes={profilePhoto.sizes} />
        </div>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: biography.childMarkdownRemark.html,
          }}
        />
        <PostOverview nodes={post} />
      </div>
    )
  }
}

BlogArtist.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogArtist

export const pageQuery = graphql`
  query blogArtistQuery($name: String!) {
    contentfulArtist(name: { eq: $name }) {
      id
      name
      profilePhoto {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      biography {
        childMarkdownRemark {
          html
        }
      }
      website
      post {
        ...IndexPostFragment
      }
    }
  }
`
