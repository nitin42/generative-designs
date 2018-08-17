import React from 'react'

import { Circles } from '../../../src'
import { DetailContainer } from './DetailContainer'

export class CirclesDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <Circles
          id="circles-details"
          width={500}
          height={500}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
