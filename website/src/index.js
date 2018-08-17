import React from 'react'
import RDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './Home'
import { ChecksDetails } from './details/ChecksDetails'
import { StarFractalDetails } from './details/StarFractalDetails'
import { WavesDetails } from './details/WavesDetails'
import { SottsassDetails } from './details/SottsassDetails'
import { PolygonDetails } from './details/PolygonDetails'
import { DoublyTriangleDetails } from './details/DoublyTriangleDetails'
import { CirclesDetails } from './details/CirclesDetails'

injectGlobal`
  body {
    color: #4f4f4f;
  }

  i {
    cursor: pointer;
  }
`

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/checks" component={ChecksDetails} />
      <Route path="/polygon" component={PolygonDetails} />
      <Route path="/circles" component={CirclesDetails} />
      <Route path="/triangles" component={DoublyTriangleDetails} />
      <Route path="/waves" component={WavesDetails} />
      <Route path="/star" component={StarFractalDetails} />
      <Route path="/sottsass" component={SottsassDetails} />
    </div>
  </Router>
)

RDOM.render(<App />, document.getElementById('root'))
