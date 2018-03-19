import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class BlogPost extends Component {
  render() {
    console.log(this.props)
    const {
      title: { title },
      createdAt,
      featuredImage,
      body,
    } = this.props.data.contentfulPost
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
        <p>{createdAt}</p>
        <div>
          <Img sizes={featuredImage.sizes} />
        </div>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title {
        title
      }
      body {
        childMarkdownRemark {
          html
        }
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
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`
