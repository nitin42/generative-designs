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
} from './components/Placeholders'

const LOADER_COLOR = {
  MEMPHIS: '#ffe5f1',
  CHECKS: '#babcc0',
  POLYGON: '#e5d8df',
  FRIEDER: '#ffd8ea',
  TRIANGLE: '#7f3457',
  WAVES: '#e6afc7',
  SOTTSASS: '#e6afc7',
  CIRCLES: '#ff7f7f'
}

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
  ChecksDesignPlaceholder(LOADER_COLOR.CHECKS),
  getDesignComponent('ChecksDesign')
)
export const PolygonDesign = withPlaceholder(
  DefaultDelay,
  PolygonDesignPlaceholder(LOADER_COLOR.POLYGON),
  getDesignComponent('PolygonDesign')
)
export const FriederLines = withPlaceholder(
  DefaultDelay,
  FriederLinesDesignPlaceholder(LOADER_COLOR.FRIEDER),
  getDesignComponent('FriederLinesDesign')
)
export const WavyLines = withPlaceholder(
  DefaultDelay,
  WaveLinesDesignPlaceholder(LOADER_COLOR.WAVES),
  getDesignComponent('WaveLinesDesign')
)
export const Circles = withPlaceholder(
  DefaultDelay,
  ChecksDesignPlaceholder(LOADER_COLOR.CIRCLES),
  getDesignComponent('CirclesDesign')
)
export const DoublyTriangle = withPlaceholder(
  DefaultDelay,
  DTDesignPlaceholder(LOADER_COLOR.TRIANGLE),
  getDesignComponent('DoubleTriangleDesign')
)
export const MemphisDots = withPlaceholder(
  DefaultDelay,
  MemphisDesignPlaceholder(LOADER_COLOR.MEMPHIS),
  getDesignComponent('MemphisDesign')
)
export const SottsassPattern = withPlaceholder(
  DefaultDelay,
  SottsassDesignPlaceholder(LOADER_COLOR.SOTTSASS),
  getDesignComponent('SottsassDesign')
)
