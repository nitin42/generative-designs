import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

import { random } from '../utils'

const colors = {
  CIRCLE_ONE: '#ff4444',
  CIRCLE_TWO: '#000000',
  CIRCLE_THREE: '#b8bdc1'
}

function drawCircle(offset, color, instance) {
  const circles = []

  for (let x = 20; x <= instance.width; x += 15) {
    const circle = instance.makeCircle(offset, x, random(0, 10))
    circle.fill = color
    circle.noStroke()

    circles.push(circle)
  }

  return circles
}

function drawPattern(instance, props) {
  let renderedCircles = []

  for (let x = 10; x <= instance.width; x += props.positionOffsetOne) {
    renderedCircles.push(drawCircle(x, colors.CIRCLE_ONE, instance))
    x += props.positionOffsetTwo

    renderedCircles.push(drawCircle(x, colors.CIRCLE_TWO, instance))
    x += props.positionOffsetThree

    renderedCircles.push(drawCircle(x, colors.CIRCLE_THREE, instance))
  }

  return renderedCircles
}

function sketch() {
  const circles = drawPattern(this.TwoJS, this.props)

  circles.forEach(objects => {
    startRotation.call(this, objects, this.props)
  })
}

const Circles = createDesign(sketch)

Circles.defaultProps = {
  callback: ctrl => {},
  scaleOffset: 0.0245,
  rotationOffset: 4,
  width: 400,
  height: 300,
  positionOffsetOne: 20,
  positionOffsetTwo: 30,
  positionOffsetThree: 40,
  hasDetailsPage: true,
  link: 'circles'
}

Circles.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  hasDetailsPage: PropTypes.bool,
  link: PropTypes.string,
  positionOffsetOne: PropTypes.number,
  positionOffsetTwo: PropTypes.number,
  positionOffsetThree: PropTypes.number
}

export { Circles }
