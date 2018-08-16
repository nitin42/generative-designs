import React from 'react'
import styled from 'react-emotion'

const Title = styled('h1')`
  font-size: 4em;
  display: inline-block;
`

export const Heading = props => (
  <div style={{ margin: '20px' }}>
    <Title>Generative Design</Title>
    <p style={{ fontSize: '1.5em' }}>
      A collection of interactive generative designs.
    </p>
  </div>
)
