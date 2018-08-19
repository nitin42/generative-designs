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
} from '../../designs-core/src'

import { hoc } from './hoc'

export const ChecksDesign = hoc(props => (
  <Checks
    id="checks"
    width={300}
    height={300}
    callback={props.cb}
    style={{ display: 'inline-block' }}
  />
))

export const CirclesDesign = hoc(props => (
  <Circles id="circles" width={300} height={300} callback={props.cb} />
))

export const PolygonDesign = hoc(props => (
  <AbstractPoly
    id="poly"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#fff1f8', display: 'inline-block' }}
  />
))

export const WaveLinesDesign = hoc(props => (
  <WavyLines
    id="wavy"
    width={300}
    height={300}
    scale={3}
    callback={props.cb}
    style={{ background: '#cd6090', display: 'inline-block' }}
  />
))

export const FriederLinesDesign = hoc(props => (
  <FriederLines
    id="frieder"
    width={300}
    height={300}
    scale={3}
    callback={props.cb}
    style={{ display: 'inline-block', background: '#ff7eba' }}
  />
))

export const SottsassDesign = hoc(props => (
  <SottsassPattern
    id="sottsass"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#ff7eba', display: 'inline-block' }}
  />
))

export const DoubleTriangleDesign = hoc(props => (
  <DoublyTriangle
    id="triangle"
    width={300}
    height={300}
    callback={props.cb}
    style={{ background: '#ff68af' }}
  />
))

export const MemphisDesign = hoc(props => (
  <MemphisDots
    id="memphis"
    width={300}
    height={300}
    style={{ background: '#ff7eba' }}
    callback={props.cb}
  />
))
