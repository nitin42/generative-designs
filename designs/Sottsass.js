import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { random } from '../utils'
import { startRotation } from '../animations/Rotation'

function drawLines(instance, props) {
  const renderedLines = []

  for (let y = 0; y <= 200; y += 5) {
    for (let x = 0; x <= 200; x += 5) {
      if (x % 10 == 0) {
        const lineUp = instance.makeLine(
          random(x, x + 1),
          y,
          random(x, x + 3),
          random(y, y - 4)
        )
        lineUp.stroke = props.strokeUp
        lineUp.linewidth = 0.3

        const group = instance.makeGroup(lineUp)
        group.scale = 3

        renderedLines.push(lineUp)
      } else {
        const lineDown = instance.makeLine(
          x,
          random(y, y + 2),
          random(x, x + 3),
          random(y, y + 3)
        )
        lineDown.stroke = props.strokeDown
        lineDown.linewidth = 0.3

        const group = instance.makeGroup(lineDown)
        group.scale = 3

        renderedLines.push(lineDown)
      }
    }
  }

  return renderedLines
}

function drawCircles(instance, props) {
  const renderedCircles = []

  for (let y = 0; y <= 100; y += 4) {
    for (let x = 0; x <= 100; x += 4) {
      const circle = instance.makeCircle(x, y, random(0, 1.1))
      circle.noStroke()
      circle.fill = '#ffd700'
      circle.opacity = 0.3
      circle.linewidth = 0.5

      const group = instance.makeGroup(circle)
      group.scale = 3

      renderedCircles.push(circle)
    }
  }

  return renderedCircles
}

function sketch() {
  const circles = drawCircles(this.TwoJS, this.props)
  const lines = drawLines(this.TwoJS, this.props)

  // Rotate lines and circles
  startRotation.call(this, circles, this.props)
  startRotation.call(this, lines, this.props)
}

const SottsassPattern = createDesign(sketch)

SottsassPattern.defaultProps = {
  callback: () => {},
  strokeUp: '#ffc0cb',
  strokeDown: '#c6e2ff',
  scaleOffset: 0.02,
  rotationOffset: 4,
  width: 300,
  height: 300,
  hasDetailsPage: false
}

SottsassPattern.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeUp: PropTypes.string,
  strokeDown: PropTypes.string,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  hasDetailsPage: PropTypes.bool
}

SottsassPattern.displayName = 'Sottsass Pattern'

export { SottsassPattern }
