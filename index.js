import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'
import { FriederLines } from './designs/FriederLines'
import { WavyLines } from './designs/WavePatternLines'
import { Circles } from './designs/Circles'
import { SottsassPattern } from './designs/Sottsass'
import { DoublyTriangle } from './designs/DoublyTriangle'
import { Checks } from './designs/Checks'
import { MemphisDots } from './designs/MemphisDots'
import { AbstractPoly } from './designs/AbstractPoly'

class App extends React.Component {
  render() {
    return <AbstractPoly id="AbstractPoly" />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
