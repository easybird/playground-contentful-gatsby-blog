import React, { PropTypes } from 'react'
import IndexPost from '../IndexPost'

const PostOverview = ({ nodes }) => {
  const posts = nodes.map(node => {
    // if it comes from allContentfulPost it's nested one node object deeper
    return <IndexPost node={node.node || node} />
    //http://www.colourlovers.com/palette/539762/Roaring_Plastics
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
      {posts}
      {posts}
    </div>
  )
}

export default PostOverview
