import React from 'react'
import styled from 'react-emotion'

import { Heading } from './Heading'
import { Footer } from './Footer'
import { Player } from './Player'
import {
  ChecksDesign,
  CirclesDesign,
  PolygonDesign,
  WaveLinesDesign,
  FriederLinesDesign,
  SottsassDesign,
  DoubleTriangleDesign,
  MemphisDesign
} from './designs'

import { Provider } from './context'

import { StarFractal } from '../../src'

const Catalogue = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 40px;
  padding: 50px;
`

const Icon = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

// TODO: The API is messy. Refactor the logic for updating the state with callback.
export class Home extends React.Component {
  // Instance of a design
  state = {
    checksInstance: null,
    circlesInstance: null,
    polyInstance: null,
    wavyInstance: null,
    friederInstance: null,
    sottsassInstance: null,
    triangleInstance: null,
    memphisInstance: null
  }

  render() {
    return (
      <React.Fragment>
        <Heading />
        <Catalogue>
          <Provider value={this.state}>
            <ChecksDesign
              cb={checksInstance => this.setState({ checksInstance })}
            />
            <CirclesDesign
              cb={circlesInstance => this.setState({ circlesInstance })}
            />
            <PolygonDesign
              cb={polyInstance => this.setState({ polyInstance })}
            />
            <WaveLinesDesign
              cb={wavyInstance => this.setState({ wavyInstance })}
            />
            <FriederLinesDesign
              cb={friederInstance => this.setState({ friederInstance })}
            />
            <SottsassDesign
              cb={sottsassInstance => this.setState({ sottsassInstance })}
            />
            <DoubleTriangleDesign
              cb={triangleInstance => this.setState({ triangleInstance })}
            />
            <MemphisDesign
              cb={memphisInstance => this.setState({ memphisInstance })}
            />
          </Provider>
          <div>
            <StarFractal
              id="fractal"
              width={300}
              height={300}
              length={80}
              sides={4}
            />
          </div>
        </Catalogue>
        <Footer />
      </React.Fragment>
    )
  }
}
