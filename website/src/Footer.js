import React from 'react'
import styled from 'react-emotion'

const StyledFooter = styled('footer')`
  display: flex;
  justify-content: center;
  font-size: 12px;
`

const StyledLink = styled('a')`
  text-decoration: none;
  color: #4f4f4f;
  font-weight: bold;
`

export const Footer = props => (
  <StyledFooter>
    <p>
      Made with ❤️ by{' '}
      <StyledLink href="https://nitin-tulswani.surge.sh/" target="_blank">
        Nitin Tulswani
      </StyledLink>
    </p>
  </StyledFooter>
)
