import React from 'react'
import styled, { css, keyframes } from 'react-emotion'

const ChecksPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
`

const PolygonPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: #fff1f8;
`

const SottsassPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: #ff7eba;
`

const DoubleTrianglePlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: #ff68af;
`
const WaveLinesPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: #cd6090;
`
const FriederLinesPlaceholder = styled('div')`
  -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300;
  height: 300;
  display: flex;
  justify-content: center;
  aligns-items: center;
  background: #ff7eba;
`
const MemphisDotPlaceholder = styled('div')`
	-webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
	box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	width: 300;
	height: 300;
	display: flex;
	justify-content: center;
	aligns-items: center;
	background: #ff7eba';
`

// Shamelessly copied from http://tobiasahlin.com/spinkit/

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

const Dot1 = styled('div')`
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

const Dot2 = styled('div')`
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

export const ChecksDesignPlaceholder = color => (
  <ChecksPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </ChecksPlaceholder>
)

export const PolygonDesignPlaceholder = color => (
  <PolygonPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </PolygonPlaceholder>
)

export const SottsassDesignPlaceholder = color => (
  <SottsassPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </SottsassPlaceholder>
)

export const DTDesignPlaceholder = color => (
  <DoubleTrianglePlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </DoubleTrianglePlaceholder>
)

export const WaveLinesDesignPlaceholder = color => (
  <WaveLinesPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </WaveLinesPlaceholder>
)

export const FriederLinesDesignPlaceholder = color => (
  <FriederLinesPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </FriederLinesPlaceholder>
)

export const MemphisDesignPlaceholder = color => (
  <MemphisDotPlaceholder>
    <Spinner>
      <Dot1 color={color} />
      <Dot2 color={color} />
    </Spinner>
  </MemphisDotPlaceholder>
)
