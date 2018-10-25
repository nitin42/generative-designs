import React from 'react'
import styled, { keyframes } from 'react-emotion'

const PLACEHOLDER_BACKGROUND = {
  POLYGON: '#fff1f8',
  SOTTSASS: '#ff7eba',
  DTDESIGN: '#ff68af',
  WAVES: '#cd6090'
}

const StyledPlaceholder = styled('div')`
  -webkit-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
  -moz-box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
  box-shadow: 10px 10px 40px -23px rgba(194, 194, 194, 1);
  cursor: pointer;
  width: 300px;
  height: 300px;
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
  <StyledPlaceholder bg={bg || '#fff'}>
    <Spinner>
      <DotOne color={loaderColor} />
      <DotTwo color={loaderColor} />
    </Spinner>
  </StyledPlaceholder>
)

export const ChecksDesignPlaceholder = loaderColor =>
  createPlaceholder(undefined, loaderColor)

export const PolygonDesignPlaceholder = loaderColor =>
  createPlaceholder(PLACEHOLDER_BACKGROUND.POLYGON, loaderColor)

export const SottsassDesignPlaceholder = loaderColor =>
  createPlaceholder(PLACEHOLDER_BACKGROUND.SOTTSASS, loaderColor)

export const DTDesignPlaceholder = loaderColor =>
  createPlaceholder(PLACEHOLDER_BACKGROUND.DTDESIGN, loaderColor)

export const WaveLinesDesignPlaceholder = loaderColor =>
  createPlaceholder(PLACEHOLDER_BACKGROUND.WAVES, loaderColor)
