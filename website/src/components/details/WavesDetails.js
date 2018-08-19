import React from 'react'

import { WavyLines } from '../../../../src'
import { DetailContainer } from './DetailContainer'

export class WavesDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <WavyLines
          id="waves-lines"
          width={500}
          height={500}
          scale={4.8}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
