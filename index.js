import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'
import { FriederLines } from './designs/FriederLines'
import { WavyLines } from './designs/WavePatternLines'

class App extends React.Component {
  state = {
    value: 4,
    instance: null
  }

  handleInput = e => {
    const value = parseInt(e.target.value)
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <button onClick={e => this.state.instance.pause()}>Pause</button>
        <button onClick={e => this.state.instance.play()}>Play</button>
        <FriederLines
          scaleOffset={0.08}
          rotationOffset={this.state.value}
          width={500}
          height={500}
          strokeVert="purple"
          callback={instance => this.setState({ instance })}
        />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
