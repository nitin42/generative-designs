import React from 'react'
import styled from 'react-emotion'

import { Heading } from './Heading'
import { Footer } from './Footer'
import { Player } from './Player'

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

export class Home extends React.Component {
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

  handlePlay = e => {
    this.state.instance.play()
  }

  handlePause = e => {
    this.state.instance.pause()
  }

  render() {
    return (
      <React.Fragment>
        <Heading />
        <Catalogue>
          <div>
            <Checks
              id="checks"
              width={300}
              height={300}
              callback={checksInstance => this.setState({ checksInstance })}
            />
            <Player instance={this.state.checksInstance} />
          </div>
          <div>
            <Circles
              id="circles"
              autoplay={this.state.circles}
              width={380}
              height={300}
              callback={circlesInstance => this.setState({ circlesInstance })}
            />
            <Player instance={this.state.circlesInstance} />
          </div>
          <div>
            <AbstractPoly
              id="poly"
              autoplay={this.state.abstractPoly}
              width={300}
              height={300}
              callback={polyInstance => this.setState({ polyInstance })}
            />
            <Player instance={this.state.polyInstance} />
          </div>
          <div>
            <WavyLines
              id="wavy"
              autoplay={this.state.WavyLines}
              width={300}
              height={300}
              scale={3}
              callback={wavyInstance => this.setState({ wavyInstance })}
            />
            <Player instance={this.state.wavyInstance} />
          </div>
          <div>
            <FriederLines
              id="frieder"
              autoplay={this.state.FriederLines}
              width={300}
              height={300}
              scale={3}
              callback={friederInstance => this.setState({ friederInstance })}
            />
            <Player instance={this.state.friederInstance} />
          </div>
          <div>
            <SottsassPattern
              id="sottsass"
              autoplay={this.state.Sottsass}
              width={300}
              height={300}
              callback={sottsassInstance => this.setState({ sottsassInstance })}
            />
            <Player instance={this.state.sottsassInstance} />
          </div>
          <div>
            <StarFractal
              id="fractal"
              autoplay={this.state.Star}
              width={300}
              height={300}
              length={80}
              sides={4}
            />
          </div>
          <div>
            <DoublyTriangle
              id="triangle"
              autoplay={this.state.DoublyTriangle}
              callback={triangleInstance => this.setState({ triangleInstance })}
            />
            <Player instance={this.state.triangleInstance} />
          </div>
          <div>
            <MemphisDots
              id="memphis"
              autoplay={this.state.MemphisDots}
              width={300}
              height={300}
              style={{ background: '#ff7eba' }}
              callback={memphisInstance => this.setState({ memphisInstance })}
            />
            <Player instance={this.state.memphisInstance} />
          </div>
        </Catalogue>
        <Footer />
      </React.Fragment>
    )
  }
}
