import React from 'react'

import { Player } from './Player'

import { Consumer } from './context'

// This high order function is generic, i.e it takes any design component,
// and passes a callback prop to it. The callback prop is used to update the
// state with an instance of currently rendered design. The "instanceName"
// param refers to the instance of design. This is used to play and pause
// the animations for the currently rendered design.
export const hoc = (Design, displayName, instanceName) => {
  const GenericDesign = props => (
    <Consumer>
      {data => (
        <div>
          <Design cb={props.cb} />
          <Player instance={data[instanceName]} />
        </div>
      )}
    </Consumer>
  )

  GenericDesign.displayName = displayName

  return GenericDesign
}
