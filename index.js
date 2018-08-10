import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'
import { FriederLines } from './designs/FriederLines'

const App = () => <FriederLines scale="3" />

ReactDOM.render(<App />, document.getElementById('root'))
