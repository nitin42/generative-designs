import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

import { random } from '../utils'

function drawOddHex(instance, len, y) {
  let count = 0
  const renderedHex = []

  for (let x = len + 25; x <= instance.width - 40; x += 50) {
    if (count % 2 === 0) {
      const poly = instance.makePolygon(x, y, 10, 6)
      poly.fill = 'pink'
      poly.stroke = 'pink'

      renderedHex.push(poly)
    } else {
      const poly = instance.makePolygon(x, y, 10, 6)
      poly.fill = '#86cece'
      poly.stroke = '#86cece'
      renderedHex.push(poly)
    }
    count++
  }

  return renderedHex
}

function drawEvenHex(instance, len, y) {
  let count = 0
  const renderedHex = []

  for (let x = len + 25; x <= instance.width - 70; x += 50) {
    if (count % 2 === 0) {
      const poly = instance.makePolygon(x, y, 10, 6)
      poly.fill = '#ea8e6c'
      poly.stroke = '#ea8e6c'

      renderedHex.push(poly)
    } else {
      const poly = instance.makePolygon(x, y, 10, 6)
      poly.fill = '#b8d9d0'
      poly.stroke = '#b8d9d0'

      renderedHex.push(poly)
    }
    count++
  }

  return renderedHex
}

function drawPolygon(instance, props) {
  let renderedHex = []

  for (let x = 30; x <= 400; x += 40) {
    renderedHex.push(drawOddHex(instance, 20, x))
    x += 40
    renderedHex.push(drawEvenHex(instance, 45, x))
  }

  return renderedHex
}

function sketch() {
  const polys = drawPolygon(this.TwoJS, this.props)

  this.props.autoplay
    ? polys.forEach(poly => startRotation.call(this, poly, this.props))
    : null
}

const AbstractPoly = createDesign(sketch)

AbstractPoly.defaultProps = {
  callback: ctrl => {},
  scaleOffset: 0.0245,
  rotationOffset: 4,
  width: 480,
  height: 430,
  style: { background: '#fff1f8', display: 'inline-block' },
  autoplay: true
}

AbstractPoly.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  autoplay: PropTypes.bool
}

export { AbstractPoly }
