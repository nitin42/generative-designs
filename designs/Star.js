import PropTypes from 'prop-types'

import { flush } from '../renderer/flush'
import { createDesign } from './createDesign'

function draw(instance, x, y, props) {
  const { length: radius, sides, stroke, fill } = props

  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  star.fill = fill
  star.stroke = stroke

  if (radius > 12) {
    drawStars(instance, x + radius / 2, y, radius / 2, sides)
    drawStars(instance, x - radius / 2, y, radius / 2, sides)
    drawStars(instance, x, y + radius / 2, radius / 2, sides)
    drawStars(instance, x, y - radius / 2, radius / 2, sides)
  }
}
function drawFractal(instance, props) {
  draw(instance, instance.width / 2, instance.height / 2, props)
}

// This is required for generating different stars
function drawStars(inst, x, y, radius, sides) {
  const star = inst.makeStar(x, y, radius, radius - 30, sides)

  star.fill = 'pink'
  star.stroke = 'mistyrose'

  if (radius > 12) {
    drawStars(inst, x + radius / 2, y, radius / 2, sides)
    drawStars(inst, x - radius / 2, y, radius / 2, sides)
    drawStars(inst, x, y + radius / 2, radius / 2, sides)
    drawStars(inst, x, y - radius / 2, radius / 2, sides)
  }
}

function sketch() {
  drawFractal(this.TwoJS, this.props)
}

const StarFractal = createDesign(sketch)

StarFractal.displayName = 'StarFractal'

StarFractal.defaultProps = {
  // Length of the fractal
  length: 50,

  height: 500,
  width: 500,

  // Number of sides of star
  sides: 8,

  stroke: 'mistyrose',
  fill: 'pink',

  bg: '',

  callback: instance => {}
}

StarFractal.propTypes = {
  length: PropTypes.number,

  height: PropTypes.number,
  width: PropTypes.number,

  sides: PropTypes.number,

  stroke: PropTypes.string,
  fill: PropTypes.string,

  bg: PropTypes.string,

  callback: PropTypes.func
}

export { StarFractal }
