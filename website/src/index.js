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
    background: #fffcfc;
  }

  i {
    cursor: pointer;
  }

  .slider {
    -webkit-appearance: none;
    width: 320px;
    height: 8px;
    border-radius: 5px;   
    background: #e4e4e4;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #222334;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #222334;
    cursor: pointer;
}

ul {
  list-style: none;
  font-size: 1em;
  text-align: left;
}

li {
  margin: 10px;
  padding: 10px;
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
