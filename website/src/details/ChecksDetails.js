import React from 'react'
// import styled from 'react-emotion'

import { Checks } from '../../../src'

import { Player } from '../Player'
import { DetailContainer } from './DetailContainer'

export class ChecksDetails extends React.Component {
  state = { instance: null, rotationOffset: 4, scaleOffset: 0.14 }

  render() {
    return (
      <div>
        <DetailContainer>
          <Checks
            id="checks"
            callback={instance => this.setState({ instance })}
            rotationOffset={this.state.rotationOffset}
            scaleOffset={this.state.scaleOffset}
          />
          <Player instance={this.state.instance} />
          Scale offset:{' '}
          <input
            type="range"
            min="0.001"
            max="0.4"
            step="0.0001"
            value={this.state.scaleOffset}
            onChange={e => this.setState({ scaleOffset: e.target.value })}
          />
          Rotation offset:{' '}
          <input
            type="range"
            min="1"
            max="20"
            value={this.state.rotationOffset}
            onChange={e =>
              this.setState({ rotationOffset: parseInt(e.target.value) })
            }
          />
        </DetailContainer>
      </div>
    )
  }
}
