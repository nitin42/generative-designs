import React from 'react'

import { SottsassPattern } from '../../../src'
import { DetailContainer } from './DetailContainer'

export class SottsassDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <SottsassPattern
          id="sottsass-details"
          width={500}
          height={500}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
