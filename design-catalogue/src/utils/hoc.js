import React from 'react'

import { Player } from '../components/Player'

// This high order function is generic, i.e it takes any design component,
// and passes a callback prop to it. The callback prop is used to update the
// state with an instance of currently rendered design.
export const hoc = Design => {
  class GenericDesign extends React.Component {
    // The instance property of the state refers to the instance of design. This is used to play and pause
    // the animations for the currently rendered design.
    state = { designInstance: null }

    render() {
      return (
        <div>
          <Design cb={designInstance => this.setState({ designInstance })} />
          <Player instance={this.state.designInstance} />
        </div>
      )
    }
  }

  return GenericDesign
}
