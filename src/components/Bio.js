import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          A podcast about the odd things we do in our daily lives with <strong>Tyler Ford</strong> and <strong>Dillon Curry</strong> who live and work in Boston, MA.
        </p>
      </div>
    )
  }
}

export default Bio
