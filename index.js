import React from 'react'
import ReactDOM from 'react-dom'

import { StarFractal } from './designs/Star'

const App = () => (
  <StarFractal length={120} width={500} height={500} sides={4}>
    {svg => console.log(svg)}
  </StarFractal>
)

ReactDOM.render(<App />, document.getElementById('root'))
