import React from 'react'
import { createCache, createResource } from 'simple-cache-provider'
import { Link } from 'react-router-dom'

import {
  ChecksDesignPlaceholder,
  PolygonDesignPlaceholder,
  DTDesignPlaceholder,
  WaveLinesDesignPlaceholder,
  SottsassDesignPlaceholder
} from '../components/Placeholders'

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

// We are using suspense here to suspend rendering while the design gets resolved, in other words, suspend rendering while the designs are being computed.
// Synchronously rendering all the designs is computationally heavy because it involves a lot of computational overhead, which includes applying operations such as translation, rotation and rendering the svg path
// This solution is still far from perfect but atleast it doesn't degrade the UX by flashing all the computed design at once on each refresh

const DEFAULT_DELAY = 1500

const SLEEP_TIMEOUT = 1000

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const cache = createCache()

const createDesignResource = createResource(
  () => sleep(SLEEP_TIMEOUT).then(() => import('./designs').then(mod => mod)),
  t => t
)
const createFractalResource = createResource(
  () =>
    sleep(SLEEP_TIMEOUT).then(() =>
      import('../../designs-core/src').then(mod => mod)
    ),
  t => t
)

const getDesignComponent = designName => props => {
  const designs = createDesignResource.read(cache, props)
  const Design = designs[designName]

  return <Design {...props} />
}

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
  DEFAULT_DELAY,
  ChecksDesignPlaceholder('mistyrose'),
  props => {
    const Fractal = createFractalResource.read(cache, props)

    return (
      <Link to="/star">
        <Fractal.StarFractal {...props} />
      </Link>
    )
  }
)
export const ChecksDesign = withPlaceholder(
  DEFAULT_DELAY,
  ChecksDesignPlaceholder(LOADER_COLOR.CHECKS),
  getDesignComponent('ChecksDesign')
)
export const PolygonDesign = withPlaceholder(
  DEFAULT_DELAY,
  PolygonDesignPlaceholder(LOADER_COLOR.POLYGON),
  getDesignComponent('PolygonDesign')
)

export const WavyLines = withPlaceholder(
  DEFAULT_DELAY,
  WaveLinesDesignPlaceholder(LOADER_COLOR.WAVES),
  getDesignComponent('WaveLinesDesign')
)
export const Circles = withPlaceholder(
  DEFAULT_DELAY,
  ChecksDesignPlaceholder(LOADER_COLOR.CIRCLES),
  getDesignComponent('CirclesDesign')
)
export const DoublyTriangle = withPlaceholder(
  DEFAULT_DELAY,
  DTDesignPlaceholder(LOADER_COLOR.TRIANGLE),
  getDesignComponent('DoubleTriangleDesign')
)

export const SottsassPattern = withPlaceholder(
  DEFAULT_DELAY,
  SottsassDesignPlaceholder(LOADER_COLOR.SOTTSASS),
  getDesignComponent('SottsassDesign')
)
