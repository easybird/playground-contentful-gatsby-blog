import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const Header = () => (
  <div
    style={{
      background: 'lightseagreen',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Proof Of Concept: Basic Blog
        </Link>
      </h1>
      <div className="header">
        <Link className="header-item" to="/">
          <h5>Posts</h5>
        </Link>
        <Link className="header-item" to="/authors">
          <h5>Authors</h5>
        </Link>
        <Link className="header-item" to="/categories">
          <h5>Categories</h5>
        </Link>
        <Link className="header-item" to="/tags">
          <h5>Tags</h5>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
