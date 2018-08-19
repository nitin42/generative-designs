import React from 'react'

import { WavyLines } from '../../../../designs-core/src'
import { DetailContainer } from './DetailContainer'

import { Player } from '../Player'

export class WavesDetails extends React.Component {
  state = { instance: null }

  render() {
    return (
      <DetailContainer>
        <WavyLines
          id="waves-lines"
          width={500}
          height={500}
          scale={4.8}
          className="animated zoomIn"
          callback={instance => this.setState({ instance })}
        />
        <Player instance={this.state.instance} />
      </DetailContainer>
    )
  }
}
