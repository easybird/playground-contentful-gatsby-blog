import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogAuthor extends Component {
  render() {
    console.log(this.props)
    const {
      name,
      profilePhoto,
      biography,
      website,
      post,
    } = this.props.data.contentfulAuthor
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

BlogAuthor.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogAuthor

export const pageQuery = graphql`
  query blogAuthorQuery($name: String!) {
    contentfulAuthor(name: { eq: $name }) {
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
