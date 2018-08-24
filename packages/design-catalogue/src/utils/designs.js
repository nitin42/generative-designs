import React from 'react'
import { Link } from 'react-router-dom'

import {
  Checks,
  Circles,
  AbstractPoly,
  DoublyTriangle,
  FriederLines,
  SottsassPattern,
  MemphisDots,
  WavyLines
} from '../../designs-core/src'

import { hoc } from './hoc'

export const ChecksDesign = hoc(props => (
  <Link to="/checks">
    <Checks
      id="checks"
      width={300}
      height={300}
      callback={props.cb}
      style={{ display: 'block' }}
    />
  </Link>
))

export const CirclesDesign = hoc(props => (
  <Link to="/circles">
    <Circles
      id="circles"
      width={300}
      height={300}
      style={{ display: 'block' }}
      callback={props.cb}
    />
  </Link>
))

export const PolygonDesign = hoc(props => (
  <AbstractPoly
    id="poly"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#fff1f8', display: 'block', cursor: 'auto' }}
  />
))

export const WaveLinesDesign = hoc(props => (
  <WavyLines
    id="wavy"
    width={300}
    height={300}
    scale={3}
    callback={props.cb}
    style={{ background: '#cd6090', display: 'block', cursor: 'auto' }}
  />
))

export const FriederLinesDesign = hoc(props => (
  <FriederLines
    id="frieder"
    width={300}
    height={300}
    scale={3}
    callback={props.cb}
    style={{ display: 'block', background: '#ff7eba', cursor: 'auto' }}
  />
))

export const SottsassDesign = hoc(props => (
  <SottsassPattern
    id="sottsass"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#ff7eba', display: 'block', cursor: 'auto' }}
  />
))

export const DoubleTriangleDesign = hoc(props => (
  <DoublyTriangle
    id="triangle"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#ff68af', cursor: 'auto' }}
  />
))

export const MemphisDesign = hoc(props => (
  <MemphisDots
    id="memphis"
    width={300}
    height={300}
    style={{ background: '#ff7eba', cursor: 'auto' }}
    callback={props.cb}
  />
))
