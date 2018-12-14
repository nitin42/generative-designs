import React from 'react'
import styled, { css } from 'react-emotion'

const Title = styled('h1')`
  font-size: 4em;
  display: inline-block;

  @media screen and (max-device-width: 480px) {
    font-size: 2.4em;
  }
`

export const Heading = props => (
  <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
    <Title>Generative Design</Title>
  </div>
)
