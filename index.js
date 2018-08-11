import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'
import { FriederLines } from './designs/FriederLines'
import { WavyLines } from './designs/WavePatternLines'

class App extends React.Component {
  state = {
    value: 2,
    instance: null,
    sides: 4,
    frames: 0
  }

  handleInput = e => {
    const value = parseInt(e.target.value)
    this.setState({ value })
  }

  render() {
    return (
      <div>
        Sides:{' '}
        <input
          type="range"
          min="1"
          max="40"
          value={this.state.sides}
          onChange={e => this.setState({ sides: parseInt(e.target.value) })}
        />
        Length:{' '}
        <input
          type="range"
          min="1"
          max="200"
          value={this.state.value}
          onChange={this.handleInput}
        />
        {/* <FriederLines
					id="frieder-lines"
					style={{ background: '#ae4b74', display: 'inline-block' }}
					scaleOffset={0.08}
					rotationOffset={this.state.value}
					width={250}
					height={280}
					strokeVert="purple"
					callback={instance => this.setState({ instance })}
				/> */}
        {/* <WavyLines
					id="wavy-lines"
					callback={instance => this.setState({ instance })}
					rotationOffset={this.state.value}
					strokeUp="#fbc8b8"
					style={{ background: '#eee9fd', display: 'inline-block' }}
				/> */}
        <button onClick={e => this.state.instance.play()}>Play</button>
        <button onClick={e => this.state.instance.pause()}>Pause</button>
        <StarFractal
          id="star-fractal"
          length={this.state.value}
          sides={this.state.sides}
        />
        {/* <button onClick={e => this.state.instance.pause()}>Pause</button>
				 */}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
