import React from 'react'

import { Circles } from '../../../../designs-core/src'
import { DetailContainer } from './DetailContainer'

import { Player } from '../Player'

import { RangeSlider } from '../../primitives/Slider'
import { BackButton } from '../../primitives/BackButton'
import { DownloadButton } from '../../primitives/DownloadButton'
import { ShadowCanvas } from '../../primitives/Canvas'

export class CirclesDetails extends React.Component {
  state = {
    instance: null,
    positionOffsetOne: 20,
    positionOffsetTwo: 30,
    positionOffsetThree: 40
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <React.Fragment>
        <BackButton />

        <DetailContainer>
          <Circles
            id="circles-details"
            width={500}
            height={500}
            className="animated zoomIn"
            positionOffsetOne={this.state.positionOffsetOne}
            positionOffsetTwo={this.state.positionOffsetTwo}
            positionOffsetThree={this.state.positionOffsetThree}
            callback={instance => this.setState({ instance })}
          />
          <Player instance={this.state.instance} />
          <ul>
            <li>
              Offset red:
              <RangeSlider
                min="10"
                max="100"
                value={this.state.positionOffsetOne}
                onChange={e =>
                  this.setState({ positionOffsetOne: parseInt(e.target.value) })
                }
              />
            </li>
            <li>
              Offset black:
              <RangeSlider
                min="10"
                max="100"
                value={this.state.positionOffsetTwo}
                onChange={e =>
                  this.setState({ positionOffsetTwo: parseInt(e.target.value) })
                }
              />
            </li>
            <li>
              Offset grey:
              <RangeSlider
                min="10"
                max="100"
                value={this.state.positionOffsetThree}
                onChange={e =>
                  this.setState({
                    positionOffsetThree: parseInt(e.target.value)
                  })
                }
              />
            </li>
          </ul>
          <ShadowCanvas id="circles-canvas" />
          <DownloadButton
            designName="Circles_Design.png"
            canvasId="circles-canvas"
          />
        </DetailContainer>
      </React.Fragment>
    )
  }
}
