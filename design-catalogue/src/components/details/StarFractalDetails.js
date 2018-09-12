import React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'

import { StarFractal } from '../../../designs-core/src'
import { DetailContainer } from './DetailContainer'
import { ErrorBoundary } from '../ErrorBoundary'
import { Info as InfoModal } from '../Info'
import { RangeSlider } from '../../primitives/Slider'
import { Button } from '../../primitives/Button'
import { ShadowCanvas } from '../../primitives/Canvas'
import { DownloadButton } from '../../primitives/DownloadButton'
import { BackButton } from '../../primitives/BackButton'

// This is required because radius offsets can overload the stack size because generating a design involves recursive computations
const FallbackUI = () => (
  <React.Fragment>
    <p
      className={css`
        width: 500px;
        font-size: 1.2em;
        word-spacing: 2;
        margin-top: 10em;
        text-align: justify;

        @media screen and (max-device-width: 480px) {
          font-size: 1em;
          width: 350px;
          line-height: 1.5;
          text-align: justify;
        }
      `}
    >
      It seems like you are changing the inner radius or outer radius offset too
      fast or too often. Changing the radius enqueues a recursive computation
      which generates the design. Changing the radius too often may result in
      exceeding the call stack size limit. In order to avoid such scenarios,
      updates to the design are not applied. Reload the design to start again!
    </p>
    <Button onClick={e => window.location.reload(true)}>Reload design</Button>
  </React.Fragment>
)

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
    <h1>Star Fractal</h1>
    <p>
      A fractal is a geometric shape that can be split into parts, each of which
      is self-similar. This fractal uses recursion and star shape to construct a
      stochastic fractal, which means it is built on probability and randomness.
    </p>
    <p>
      By changing the parameters like <b>length</b>, <b>sides</b>, and{' '}
      <b>radius offsets</b>, you can generate different designs of this fractal.
    </p>
    <p>Try changing the parameters and see how it transforms the fractal.</p>
  </div>
)

export class StarFractalDetails extends React.Component {
  state = {
    length: 80,
    sides: 4,
    outerRadiusOffset: 2,
    innerRadiusOffset: 2
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  updateState = (e, prop) => this.setState({ [prop]: parseInt(e.target.value) })

  render() {
    return (
      <React.Fragment>
        <BackButton />
        <InfoModal>
          <Info />
        </InfoModal>
        <DetailContainer>
          <ErrorBoundary fallbackUI={<FallbackUI />}>
            <StarFractal
              id="fractal"
              width={window.innerWidth < 480 ? 320 : 500}
              height={window.innerWidth < 480 ? 320 : 500}
              length={this.state.length}
              sides={this.state.sides}
              style={{ display: 'block' }}
              className="animated zoomIn"
              fill="pink"
              stroke="mistyrose"
              innerRadiusOffset={this.state.innerRadiusOffset}
              outerRadiusOffset={this.state.outerRadiusOffset}
            />
            <ul>
              <li>
                <label>Length: </label>
                <RangeSlider
                  name="length"
                  min="1"
                  max="250"
                  value={this.state.length}
                  onChange={e => this.updateState(e, 'length')}
                />
              </li>
              <li>
                <label>Sides:</label>
                <RangeSlider
                  name="sides"
                  min="1"
                  max="30"
                  value={this.state.sides}
                  onChange={e => this.updateState(e, 'sides')}
                />
              </li>
              <li>
                <label>Inner radius offset:</label>
                <RangeSlider
                  name="innerRadiusOffset"
                  min="2"
                  max="10"
                  value={this.state.innerRadiusOffset}
                  onChange={e => this.updateState(e, 'innerRadiusOffset')}
                />
              </li>
              <li>
                <label>Outer radius offset:</label>
                <RangeSlider
                  name="outerRadiusOffset"
                  min="2"
                  max="10"
                  value={this.state.outerRadiusOffset}
                  onChange={e => this.updateState(e, 'outerRadiusOffset')}
                />
              </li>
            </ul>
            <ShadowCanvas id="fractal-canvas" />
            <DownloadButton
              designName="Star_Fractal_Design.png"
              canvasId="fractal-canvas"
            />
          </ErrorBoundary>
        </DetailContainer>
      </React.Fragment>
    )
  }
}
