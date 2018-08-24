import React from 'react'
import styled from 'react-emotion'

const Icon = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export class Player extends React.Component {
  state = {
    playing: this.props.instance && this.props.instance.playing
  }

  handlePlayer = action => {
    this.setState(state => ({ playing: !state.playing }))
    this.props.instance[action]()
  }

  render() {
    return (
      <Icon>
        {this.state.playing ? (
          <i
            className="fas fa-pause"
            onClick={e => this.handlePlayer('pause')}
          />
        ) : (
          <i className="fas fa-play" onClick={e => this.handlePlayer('play')} />
        )}
      </Icon>
    )
  }
}
