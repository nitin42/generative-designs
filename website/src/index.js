import React from 'react'
import RDOM from 'react-dom'
import { injectGlobal } from 'react-emotion'

injectGlobal`
  body {
    color: #4f4f4f;
  }
`

import { Home } from './Home'

RDOM.render(<Home />, document.getElementById('root'))
