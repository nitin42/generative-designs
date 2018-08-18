import React from 'react'
import { css } from 'emotion'

import { StarFractal } from '../../../src'

import { DetailContainer } from './DetailContainer'

import { ErrorBoundary } from '../components/ErrorBoundary'
import { Info as InfoModal } from '../components/Info'

import { ColorPicker } from '../primitives/ColorPicker'
import { RangeSlider } from '../primitives/Slider'
import { Button } from '../primitives/Button'
import { ShadownCanvas } from '../primitives/Canvas'

import { DownloadButton } from '../../primitives/DownloadButton'

// This is required because radius offsets can overload the stack size because generating a design involves recursive computations
const FallbackUI = () => (
  <React.Fragment>
    <p
      className={css`
        width: 500px;
        font-size: 1.2em;
        word-spacing: 2;
        margin-top: 10em;
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
    `}
  >
    <h1>Star Fractal</h1>
    <p>
      A fractal is a geometric shape that can be split into parts, each of which
      is self-similar. This fractal uses recursion and star shape to construct a
      stochastic fractal, which means it is built on probability and randomness.
    </p>
    <p>
      You can generate different designs of this fractal by changing the
      parameters like <b>length</b>, <b>sides</b>, and <b>radius offsets.</b>
    </p>
    <p>
      Try changing any of the parameters and see how it transforms the fractal.
    </p>
  </div>
)

export class StarFractalDetails extends React.Component {
  state = {
    length: 80,
    sides: 4,
    outerRadiusOffset: 2,
    innerRadiusOffset: 2,
    fill: 'pink',
    stroke: 'mistyrose',
    showFillColorPicker: false,
    showStrokeColorPicker: false
  }

  updateState = (e, prop) => this.setState({ [prop]: parseInt(e.target.value) })

  toggleColorPicker = type =>
    this.setState(state => ({
      [type]: !state[type]
    }))

  updateColor = (color, type) => this.setState({ [type]: color.hex })

  render() {
    return (
      <React.Fragment>
        <InfoModal>
          <Info />
        </InfoModal>
        <DetailContainer>
          <ErrorBoundary fallbackUI={<FallbackUI />}>
            <StarFractal
              id="fractal"
              width={500}
              height={500}
              length={this.state.length}
              sides={this.state.sides}
              className="animated zoomIn"
              fill={this.state.fill}
              stroke={this.state.stroke}
              innerRadiusOffset={this.state.innerRadiusOffset}
              outerRadiusOffset={this.state.outerRadiusOffset}
            />
            <ul>
              <li>
                Length:{' '}
                <RangeSlider
                  name="length"
                  min="1"
                  max="250"
                  value={this.state.length}
                  onChange={this.updateState}
                />
              </li>
              <li>
                Sides: &nbsp;&nbsp;&nbsp;
                <RangeSlider
                  name="sides"
                  min="1"
                  max="30"
                  value={this.state.sides}
                  onChange={this.updateState}
                />
              </li>
              <li>
                <ColorPicker
                  name="Fill:"
                  color={this.state.fill}
                  show={this.state.showFillColorPicker}
                  clickHandler={this.toggleColorPicker}
                  handleColorChange={this.updateColor}
                />
              </li>
              <li>
                <ColorPicker
                  name="Stroke:"
                  color={this.state.stroke}
                  show={this.state.showStrokeColorPicker}
                  clickHandler={this.toggleColorPicker}
                  handleColorChange={this.updateColor}
                />
              </li>
              <li>
                Inner radius offset:{' '}
                <RangeSlider
                  name="innerRadiusOffset"
                  min="2"
                  max="10"
                  value={this.state.innerRadiusOffset}
                  onChange={this.updateState}
                />
              </li>
              <li>
                Outer radius offset:{' '}
                <RangeSlider
                  name="outerRadiusOffset"
                  min="2"
                  max="10"
                  value={this.state.outerRadiusOffset}
                  onChange={this.updateState}
                />
              </li>
            </ul>
            <ShadownCanvas id="fractal-canvas" />
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
