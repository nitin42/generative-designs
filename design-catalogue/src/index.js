import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './components/Home'

import { ChecksDetails } from './components/details/ChecksDetails'
import { StarFractalDetails } from './components/details/StarFractalDetails'
import { CirclesDetails } from './components/details/CirclesDetails'

import './utils/globalStyles'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/checks" component={ChecksDetails} />
      <Route path="/circles" component={CirclesDetails} />
      <Route path="/star" component={StarFractalDetails} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
