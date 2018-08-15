import React from 'react'
import styled from 'react-emotion'

const Title = styled('h1')`
  font-size: 2em;
  display: inline-block;
`

export const Heading = props => (
  <div style={{ padding: '20px' }}>
    <Title>Generative Design</Title>
    <p>A collection of interactive generative designs.</p>
  </div>
)
