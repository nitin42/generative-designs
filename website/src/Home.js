import React from 'react'
import styled from 'react-emotion'

import { StarFractal } from '../../src'

const Title = styled('h1')`
  font-size: 2em;
  color: #4f4f4f;
  display: inline-block;
`

const Catalogue = styled('div')`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 25px;
`

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: '20px' }}>
          <Title>Generative Design</Title>
          <p>A collection of interactive generative designs.</p>
        </div>
        <Catalogue>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
          <div>
            <img src={require('../../assets/fractal.png')} width={200} />
          </div>
        </Catalogue>
      </div>
    )
  }
}
