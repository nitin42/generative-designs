import React from 'react'
import { css } from 'emotion'

import { StarFractal } from '../../../src'
import { DetailContainer } from './DetailContainer'

import { ErrorBoundary } from '../ErrorBoundary'
import { ColorPicker } from '../ColorPicker'
import { RangeSlider } from '../Slider'

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
    <button
      className={css`
        color: #4f4f4f;
        border: 1px solid #4f4f4f;
        padding: 10px;
        border-radius: 4px;

        &:hover {
          background: #4f4f4f;
          color: white;
        }
      `}
      onClick={e => window.location.reload(true)}
    >
      Reload design
    </button>
  </React.Fragment>
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

  changeLength = e => {
    const length = parseInt(e.target.value)
    this.setState({ length })
  }

  changeSides = e => {
    const sides = parseInt(e.target.value)
    this.setState({ sides })
  }

  changeOuterRadius = e => {
    const outerRadiusOffset = parseInt(e.target.value)
    this.setState({ outerRadiusOffset })
  }

  changeInnerRadius = e => {
    const innerRadiusOffset = parseInt(e.target.value)
    this.setState({ innerRadiusOffset })
  }

  toggleFillColorPicker = e =>
    this.setState(state => ({
      showFillColorPicker: !state.showFillColorPicker
    }))

  toggleStrokeColorPicker = e =>
    this.setState(state => ({
      showStrokeColorPicker: !state.showStrokeColorPicker
    }))

  changeFillColor = color => this.setState({ fill: color.hex })

  changeStrokeColor = color => this.setState({ stroke: color.hex })

  render() {
    return (
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
                min="1"
                max="250"
                value={this.state.length}
                onChange={this.changeLength}
              />
            </li>
            <li>
              Sides: &nbsp;&nbsp;&nbsp;
              <RangeSlider
                min="1"
                max="30"
                value={this.state.sides}
                onChange={this.changeSides}
              />
            </li>
            <li>
              <ColorPicker
                name="Fill:"
                color={this.state.fill}
                show={this.state.showFillColorPicker}
                clickHandler={this.toggleFillColorPicker}
                handleColorChange={this.changeFillColor}
              />
            </li>
            <li>
              <ColorPicker
                name="Stroke:"
                color={this.state.stroke}
                show={this.state.showStrokeColorPicker}
                clickHandler={this.toggleStrokeColorPicker}
                handleColorChange={this.changeStrokeColor}
              />
            </li>
            <li>
              Inner radius offset:{' '}
              <RangeSlider
                min="1"
                max="10"
                value={this.state.innerRadiusOffset}
                onChange={this.changeInnerRadius}
              />
            </li>
            <li>
              Outer radius offset:{' '}
              <RangeSlider
                min="1"
                max="10"
                value={this.state.outerRadiusOffset}
                onChange={this.changeOuterRadius}
              />
            </li>
          </ul>
        </ErrorBoundary>
      </DetailContainer>
    )
  }
}
