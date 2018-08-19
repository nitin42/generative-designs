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
  <div style={{ margin: '20px' }}>
    <Title>Generative Design</Title>
    <p
      className={css`
        font-size: 1.6em;

        @media screen and (max-device-width: 480px) {
          font-size: 1em;
        }
      `}
    >
      A collection of interactive generative designs.
    </p>
  </div>
)
