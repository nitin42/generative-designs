import React from 'react'
import styled from 'react-emotion'

import { Heading } from './Heading'
import { Footer } from './Footer'
import { Player } from './Player'
import { Info } from './Info'
import {
  ChecksDesign,
  StarFractal,
  PolygonDesign,
  FriederLines,
  WavyLines,
  Circles,
  MemphisDots,
  DoublyTriangle,
  SottsassPattern
} from './lazyLoad'

const Catalogue = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  padding: 40px;
  margin-left: 40px;
`

export const Home = props => (
  <React.Fragment>
    <Info />
    <Heading />
    <Catalogue>
      <StarFractal
        id="fractal"
        width={300}
        height={300}
        length={80}
        sides={4}
      />
      <ChecksDesign />
      <PolygonDesign />
      <SottsassPattern />
      <WavyLines />
      <FriederLines />
      <Circles />
      <MemphisDots />
      <DoublyTriangle />
    </Catalogue>
    <Footer />
  </React.Fragment>
)
