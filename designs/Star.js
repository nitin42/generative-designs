import PropTypes from 'prop-types'

import { createDesign } from './createDesign'

// This is required for generating different stars
function createSubStars(instance, x, y, radius, sides) {
  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  star.fill = 'pink'
  star.stroke = 'mistyrose'

  if (radius > 12) {
    createSubStars(instance, x + radius / 2, y, radius / 2, sides)
    createSubStars(instance, x - radius / 2, y, radius / 2, sides)
    createSubStars(instance, x, y + radius / 2, radius / 2, sides)
    createSubStars(instance, x, y - radius / 2, radius / 2, sides)
  }
}

function createStar(instance, x, y, props) {
  const { length: radius, sides, stroke, fill } = props

  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  star.fill = fill
  star.stroke = stroke

  if (radius > 12) {
    createSubStars(instance, x + radius / 2, y, radius / 2, sides)
    createSubStars(instance, x - radius / 2, y, radius / 2, sides)
    createSubStars(instance, x, y + radius / 2, radius / 2, sides)
    createSubStars(instance, x, y - radius / 2, radius / 2, sides)
  }
}

function drawStarFractal(instance, props) {
  createStar(instance, instance.width / 2, instance.height / 2, props)
}

function sketch() {
  drawStarFractal(this.TwoJS, this.props)
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
