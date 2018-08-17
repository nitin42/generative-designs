import React from 'react'

import { StarFractal } from '../../../src'
import { DetailContainer } from './DetailContainer'

export class StarFractalDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <StarFractal
          id="fractal"
          width={500}
          height={500}
          length={80}
          sides={4}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
