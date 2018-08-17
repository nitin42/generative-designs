import React from 'react'
import RDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './Home'
import { ChecksDetails } from './details/ChecksDetails'

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
    </div>
  </Router>
)

RDOM.render(<App />, document.getElementById('root'))
