import React from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`

export const DetailContainer = props => <Container>{props.children}</Container>
