import React from 'react'
import { createCache, createResource } from 'simple-cache-provider'

import {
  ChecksDesignPlaceholder,
  PolygonDesignPlaceholder,
  MemphisDesignPlaceholder,
  FriederLinesDesignPlaceholder,
  DTDesignPlaceholder,
  WaveLinesDesignPlaceholder,
  SottsassDesignPlaceholder
} from './Placeholders'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const cache = createCache()

const createDesignResource = createResource(
  () => sleep(2000).then(() => import('./designs').then(mod => mod)),
  t => t
)
const createFractalResource = createResource(
  () => sleep(2000).then(() => import('../../src').then(mod => mod)),
  t => t
)

const getDesignComponent = designName => props => {
  const designs = createDesignResource.read(cache, props)
  const Design = designs[designName]

  return <Design {...props} />
}

const DefaultDelay = 2000

const withPlaceholder = (
  delay,
  fallbackComponent,
  DesignComponent
) => props => (
  <React.Placeholder delayMs={delay} fallback={fallbackComponent}>
    <DesignComponent {...props} />
  </React.Placeholder>
)

export const StarFractal = withPlaceholder(
  DefaultDelay,
  ChecksDesignPlaceholder('mistyrose'),
  props => {
    const Fractal = createFractalResource.read(cache, props)

    return <Fractal.StarFractal {...props} />
  }
)
export const ChecksDesign = withPlaceholder(
  DefaultDelay,
  ChecksDesignPlaceholder('#babcc0'),
  getDesignComponent('ChecksDesign')
)
export const PolygonDesign = withPlaceholder(
  DefaultDelay,
  PolygonDesignPlaceholder('#e5d8df'),
  getDesignComponent('PolygonDesign')
)
export const FriederLines = withPlaceholder(
  DefaultDelay,
  FriederLinesDesignPlaceholder('#ffd8ea'),
  getDesignComponent('FriederLinesDesign')
)
export const WavyLines = withPlaceholder(
  DefaultDelay,
  WaveLinesDesignPlaceholder('#e6afc7'),
  getDesignComponent('WaveLinesDesign')
)
export const Circles = withPlaceholder(
  DefaultDelay,
  ChecksDesignPlaceholder('#ff7f7f'),
  getDesignComponent('CirclesDesign')
)
export const DoublyTriangle = withPlaceholder(
  DefaultDelay,
  DTDesignPlaceholder('#7f3457'),
  getDesignComponent('DoubleTriangleDesign')
)
export const MemphisDots = withPlaceholder(
  DefaultDelay,
  MemphisDesignPlaceholder('#ffe5f1'),
  getDesignComponent('MemphisDesign')
)
export const SottsassPattern = withPlaceholder(
  DefaultDelay,
  SottsassDesignPlaceholder('#e6afc7'),
  getDesignComponent('SottsassDesign')
)
