import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'
import { FriederLines } from './designs/FriederLines'
import { WavyLines } from './designs/WavePatternLines'

const App = () => <WavyLines scale={4} up={50} down={180} />

ReactDOM.render(<App />, document.getElementById('root'))
