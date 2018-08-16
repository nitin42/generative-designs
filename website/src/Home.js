import React from 'react'
import styled from 'react-emotion'
import Noty from 'noty'
import Modal from 'react-responsive-modal'

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
  padding: 40px;
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
    memphisInstance: null,
    open: false
  }

  render() {
    return (
      <React.Fragment>
        {/* <div style={{ float: 'right', margin: 10, cursor: 'pointer' }} onClick={e => this.setState({ open: true })}>
					<i className="fas fa-info-circle" />
				</div>
				<Modal open={this.state.open} onClose={() => this.setState({ open: false })}>
					<div style={{ padding: 10, fontSize: '0.8em', width: 300, height: 350, lineHeight: 1.5 }}>
						<p>Hello 👋</p>
						<p>
							You will find a collection of generative designs on the home page. Interact with a design by clicking on
							the play icon. Clicking on the play icon will start the animation.
						</p>
						<h3>Parameterization</h3>
						<p>
							To be able to create a bridge between transformation and visualization, you can click on a design to
							pop-up a details page. On the details page, you will find a list of controls to change the parameters of a
							design. Use of parameters defines a system of visualization and simulation.
						</p>
						<div style={{ borderLeft: '4px solid #4f4f4f', padding: 5 }}>
							<b>Note: </b>
						</div>
					</div>
				</Modal> */}
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
