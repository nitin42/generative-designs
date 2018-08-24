import React from 'react'
import Two from 'two.js'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

import { flush } from '../renderer/flush'

// Takes a sketch function, and renders Two.js graphics
export function createDesign(sketch) {
  return class extends React.Component {
    // Two.js instance
    TwoJS = null

    componentDidMount() {
      // Get the main container element
      const container = document.getElementById(this.props.id)

      // Two.js params
      const params = { width: this.props.width, height: this.props.height }

      // Append Two.js base to our container
      this.TwoJS = new Two(params).appendTo(container)

      // Do some extra work with the Two.js instance (play/pause the animations, create custom curves etc)
      this.props.callback(this.TwoJS)

      // Render the graphics
      flush.call(this, { shouldDequeue: false }, sketch)
    }

    componentDidUpdate() {
      // Clear the previously rendered Two.js objects, and start rendering from scratch (otherwise we end up with an array of old objects along with the new objects)
      flush.call(this, { shouldDequeue: true }, sketch)
    }

    render() {
      if (this.props.hasDetailsPage) {
        return (
          <Link to={`/${this.props.link}`}>
            <div
              className={
                this.props.className +
                ' ' +
                css`
                  -webkit-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
                  -moz-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
                  box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
                  cursor: pointer;
                `
              }
              id={this.props.id}
              style={this.props.style || {}}
            />
          </Link>
        )
      } else {
        return (
          <div
            className={
              this.props.className +
              ' ' +
              css`
                -webkit-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
                -moz-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
                box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
              `
            }
            id={this.props.id}
            style={this.props.style || {}}
          />
        )
      }
    }
  }
}
