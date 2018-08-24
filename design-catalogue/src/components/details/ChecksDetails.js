import React from 'react'

import { Checks } from '../../../designs-core/src'

import { DetailContainer } from './DetailContainer'

import { Player } from '../Player'

import { RangeSlider } from '../../primitives/Slider'
import { BackButton } from '../../primitives/BackButton'
import { DownloadButton } from '../../primitives/DownloadButton'
import { ShadowCanvas } from '../../primitives/Canvas'

export class ChecksDetails extends React.Component {
  state = {
    instance: null,
    rotationOffset: 4,
    scaleOffset: 0.14,
    verticalGap: 20,
    horizontalGap: 20
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
        <DetailContainer>
          <Checks
            id="checks"
            callback={instance => this.setState({ instance })}
            rotationOffset={this.state.rotationOffset}
            scaleOffset={this.state.scaleOffset}
            verticalGap={this.state.verticalGap}
            horizontalGap={this.state.horizontalGap}
            width={window.innerWidth < 480 ? 320 : 500}
            height={window.innerWidth < 480 ? 320 : 500}
            className="animated zoomIn"
          />
          <Player instance={this.state.instance} />
          <ul>
            <li>
              Scale offset:{' '}
              <RangeSlider
                min="0.001"
                max="0.4"
                step="0.0001"
                value={this.state.scaleOffset}
                onChange={e => this.setState({ scaleOffset: e.target.value })}
              />
            </li>
            <li>
              Rotation offset:{' '}
              <RangeSlider
                min="1"
                max="20"
                value={this.state.rotationOffset}
                onChange={e =>
                  this.setState({ rotationOffset: parseInt(e.target.value) })
                }
              />
            </li>
            <li>
              Vertical space:{' '}
              <RangeSlider
                min="1"
                max="100"
                value={this.state.verticalGap}
                onChange={e =>
                  this.setState({ verticalGap: parseInt(e.target.value) })
                }
              />
            </li>
            <li>
              Horizontal space:{' '}
              <RangeSlider
                min="1"
                max="100"
                value={this.state.horizontalGap}
                onChange={e =>
                  this.setState({ horizontalGap: parseInt(e.target.value) })
                }
              />
            </li>
          </ul>
          <ShadowCanvas id="checks-canvas" />
          <DownloadButton
            designName="Checks_Design.png"
            canvasId="checks-canvas"
          />
        </DetailContainer>
      </React.Fragment>
    )
  }
}
