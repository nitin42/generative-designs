import React from 'react'
import styled from 'react-emotion'

import {
  Checks,
  Circles,
  AbstractPoly,
  DoublyTriangle,
  FriederLines,
  SottsassPattern,
  MemphisDots,
  StarFractal,
  WavyLines
} from '../../src'
import { Heading } from './Heading'
import { Footer } from './Footer'

const Catalogue = styled('div')`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 40px;
  padding: 20px;
  justify-items: center;
`

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <Catalogue>
          <Checks id="checks" autoplay={false} width={300} height={300} />
          <Circles id="circles" autoplay={false} width={380} height={300} />
          <AbstractPoly id="poly" autoplay={false} width={300} height={330} />
          <WavyLines
            id="wavy"
            autoplay={false}
            width={300}
            height={300}
            scale={3}
          />
          <FriederLines
            id="frieder"
            autoplay={false}
            width={300}
            height={300}
            scale={3}
          />
          <SottsassPattern
            id="sottsass"
            autoplay={true}
            width={300}
            height={300}
          />
          <StarFractal
            id="fractal"
            autoplay={false}
            width={300}
            height={300}
            length={80}
            sides={4}
          />
          <DoublyTriangle id="triangle" autoplay={false} />
          <MemphisDots
            id="memphis"
            autoplay={false}
            width={300}
            height={300}
            style={{ background: '#ff7eba' }}
          />
        </Catalogue>
        <Footer />
      </React.Fragment>
    )
  }
}
