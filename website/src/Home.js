import React from 'react'
import styled, { css } from 'react-emotion'

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
    <Info>
      <div
        className={css`
          padding: 10px;
          font-size: 1.2em;
          width: 350px;
          line-height: 1.5;
        `}
      >
        <p>Hello 👋</p>
        <p>
          You will find a collection of generative designs on the home page.
          Interact with a design by clicking on the play icon. Clicking on the
          play icon will start the animation.
        </p>
        <h3>Parameterization</h3>
        <p>
          To be able to create a bridge between transformation and
          visualization, you can click on a design to pop-up a details page. On
          the details page, you will find a list of controls to change the
          parameters of a design. Use of parameters defines a system of
          visualization and simulation.
        </p>
      </div>
    </Info>
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
