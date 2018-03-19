import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import PostOverview from '../components/PostOverview'

class BlogCategory extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      icon,
      shortDescription: { shortDescription },
      post,
    } = this.props.data.contentfulCategory
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
        <h3>{shortDescription}</h3>
        <PostOverview nodes={post} />
      </div>
    )
  }
}

BlogCategory.PropTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogCategory

export const pageQuery = graphql`
  query blogCategoryQuery($title: String!) {
    contentfulCategory(title: { eq: $title }) {
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
