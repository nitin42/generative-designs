import React from 'react'
import styled, { css } from 'react-emotion'

import { Heading } from './Heading'
import { Footer } from './Footer'
import { Player } from './Player'
import { Info as InfoModal } from './Info'

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
} from '../utils/lazyLoad'

const Catalogue = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 40px;
  margin-left: 20px;

  @media screen and (max-device-width: 480px) {
    grid-template-columns: 300px;
    grid-gap: 20px;
    margin-left: 5px;
  }
`

const Info = props => (
  <div
    className={css`
      padding: 10px;
      font-size: 1.2em;
      width: 350px;
      line-height: 1.5;
      text-align: justify;

      @media screen and (max-device-width: 480px) {
        font-size: 1em;
        width: 300px;
        line-height: 1.5;
        text-align: justify;
      }
    `}
  >
    <p>Hello 👋</p>
    <p>
      You will find a collection of generative designs on the home page.
      Interact with a design by clicking on the play icon. Clicking on the play
      icon will start the animation.
    </p>
    <h3>Parameterization</h3>
    <p>
      To be able to create a bridge between transformation and visualization,
      you can click on some of the designs to open the details page. On the
      details page, you will find a list of controls to change the parameters of
      the design. Optionally, you can also save the transformed design.
    </p>
    <p>
      The source code for all the designs is available on{' '}
      <a
        className={css`
          font-weight: bold;
          border-bottom: 2px solid #4f4f4f;
        `}
        href="https://github.com/nitin42/generative-designs"
        target="_blank"
      >
        GitHub
      </a>
      .
    </p>
    <p>Have fun!</p>
  </div>
)

export const Home = props => (
  <React.Fragment>
    <InfoModal>
      <Info />
    </InfoModal>
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
