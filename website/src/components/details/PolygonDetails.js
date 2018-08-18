import React from 'react'

import { AbstractPoly } from '../../../src'
import { DetailContainer } from './DetailContainer'

export class PolygonDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <AbstractPoly
          id="abstract-poly"
          width={500}
          height={500}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
