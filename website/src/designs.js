import React from 'react'

import {
  Checks,
  Circles,
  AbstractPoly,
  DoublyTriangle,
  FriederLines,
  SottsassPattern,
  MemphisDots,
  WavyLines
} from '../../src'

import { hoc } from './hoc'

export const ChecksDesign = hoc(
  props => <Checks id="checks" width={300} height={300} callback={props.cb} />,
  'Checks',
  'checksInstance'
)

export const CirclesDesign = hoc(
  props => (
    <Circles id="circles" width={380} height={300} callback={props.cb} />
  ),
  'Circles',
  'circlesInstance'
)

export const PolygonDesign = hoc(
  props => (
    <AbstractPoly id="poly" width={300} height={300} callback={props.cb} />
  ),
  'Polygon',
  'polyInstance'
)

export const WaveLinesDesign = hoc(
  props => (
    <WavyLines
      id="wavy"
      width={300}
      height={300}
      scale={3}
      callback={props.cb}
    />
  ),
  'WaveLines',
  'wavyInstance'
)

export const FriederLinesDesign = hoc(
  props => (
    <FriederLines
      id="frieder"
      width={300}
      height={300}
      scale={3}
      callback={props.cb}
    />
  ),
  'FriederLines',
  'friederInstance'
)

export const SottsassDesign = hoc(
  props => (
    <SottsassPattern
      id="sottsass"
      width={300}
      height={300}
      callback={props.cb}
    />
  ),
  'Sottsass',
  'sottsassInstance'
)

export const DoubleTriangleDesign = hoc(
  props => <DoublyTriangle id="triangle" callback={props.cb} />,
  'DoubleTriangle',
  'triangleInstance'
)

export const MemphisDesign = hoc(
  props => (
    <MemphisDots
      id="memphis"
      width={300}
      height={300}
      style={{ background: '#ff7eba' }}
      callback={props.cb}
    />
  ),
  'MemphisDesign',
  'memphisInstance'
)
