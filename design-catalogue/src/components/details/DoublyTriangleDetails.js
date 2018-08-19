import React from 'react'

import { DoublyTriangle } from '../../../../designs-core/src'
import { DetailContainer } from './DetailContainer'

export class DoublyTriangleDetails extends React.Component {
  render() {
    return (
      <DetailContainer>
        <DoublyTriangle
          id="doubly-triangle"
          width={390}
          height={390}
          className="animated zoomIn"
        />
      </DetailContainer>
    )
  }
}
