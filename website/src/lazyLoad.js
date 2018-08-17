import React from 'react'
import { createCache, createResource } from 'simple-cache-provider'

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

const DefaultFallback = () => <div>🌀 'Loading....'</div>

const DefaultDelay = 5000

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
  DefaultFallback,
  props => {
    const Fractal = createFractalResource.read(cache, props)

    return <Fractal.StarFractal {...props} />
  }
)
export const ChecksDesign = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('ChecksDesign')
)
export const PolygonDesign = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('PolygonDesign')
)
export const FriederLines = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('FriederLinesDesign')
)
export const WavyLines = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('WaveLinesDesign')
)
export const Circles = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('CirclesDesign')
)
export const DoublyTriangle = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('DoubleTriangleDesign')
)
export const MemphisDots = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('MemphisDesign')
)
export const SottsassPattern = withPlaceholder(
  DefaultDelay,
  DefaultFallback(),
  getDesignComponent('SottsassDesign')
)
