import React from 'react'
import Two from 'two.js'

import { flush } from '../renderer/flush'

// Takes a sketch function and renders two.js graphics
export function createDesign(sketch) {
  return class extends React.Component {
    // Two.js instance
    TwoJS = null

    componentDidMount() {
      const container = document.getElementById(this.props.id)
      const params = { width: this.props.width, height: this.props.height }

      this.TwoJS = new Two(params).appendTo(container)

      // Do some extra work with the instance
      this.props.callback(this.TwoJS)

      flush.call(this, { shouldDequeue: false }, sketch)
    }

    componentDidUpdate() {
      // Clear the current two.js objects, and start rendering from scratch (otherwise we end up with an array of old objects along with the current objects)
      flush.call(this, { shouldDequeue: true }, sketch)
    }

    render() {
      return <div id={this.props.id} style={this.props.style || {}} />
    }
  }
}
