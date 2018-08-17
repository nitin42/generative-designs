import React from 'react'
import styled, { css, keyframes } from 'react-emotion'

const StyledPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: ${props => props.bg};
`

// Copied from http://tobiasahlin.com/spinkit/

const skRotate = keyframes`
100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }
`

const skBounce = keyframes`
0%, 100% { 
	transform: scale(0.0);
	-webkit-transform: scale(0.0);
} 50% { 
	transform: scale(1.0);
	-webkit-transform: scale(1.0);
}
`

const Spinner = styled('div')`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: ${skRotate} 2s infinite linear;
  animation: ${skRotate} 2s infinite linear;
`

const DotOne = styled('div')`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${props => props.color};
  border-radius: 100%;

  -webkit-animation: ${skBounce}2s infinite ease-in-out;
  animation: ${skBounce}2s infinite ease-in-out;
`

const DotTwo = styled('div')`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${props => props.color};
  border-radius: 100%;
  -webkit-animation: ${skBounce} 2s infinite ease-in-out;
  animation: ${skBounce} 2s infinite ease-in-out;
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`

const createPlaceholder = (bg, loaderColor) => (
  <StyledPlaceholder bg={bg || '#fff'} width={300} height={300}>
    <Spinner>
      <DotOne color={loaderColor} />
      <DotTwo color={loaderColor} />
    </Spinner>
  </StyledPlaceholder>
)

export const ChecksDesignPlaceholder = loaderColor =>
  createPlaceholder(undefined, loaderColor)

export const PolygonDesignPlaceholder = loaderColor =>
  createPlaceholder('#fff1f8', loaderColor)

export const SottsassDesignPlaceholder = loaderColor =>
  createPlaceholder('#ff7eba', loaderColor)

export const DTDesignPlaceholder = loaderColor =>
  createPlaceholder('#ff68af', loaderColor)

export const WaveLinesDesignPlaceholder = loaderColor =>
  createPlaceholder('#cd6090', loaderColor)

export const FriederLinesDesignPlaceholder = loaderColor =>
  createPlaceholder('#ff7eba', loaderColor)

export const MemphisDesignPlaceholder = loaderColor =>
  createPlaceholder('#ff7eba', loaderColor)
