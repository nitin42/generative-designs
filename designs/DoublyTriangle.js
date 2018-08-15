import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'
import { random } from '../utils'

function drawTriangle(instance, props) {
  const triangles = []

  for (let x = 0; x <= 120; x += 10) {
    for (let y = 0; y <= 120; y += 10) {
      const triangle = instance.makePolygon(x, y, random(0, 1.2), 3)
      triangle.fill = 'mistyrose'
      triangle.noStroke()
      const group = instance.makeGroup(triangle)
      group.scale = 2.7

      triangles.push(triangle)
    }
  }

  return triangles
}

function drawLines(instance, props) {
  const renderedLines = []

  for (let y = 0; y <= 120; y += 5) {
    for (let x = 0; x <= 120; x += 5) {
      if (x % 10 == 0) {
        const x1 = random(x, x + 1)
        const x2 = random(x, x + 3)
        const y2 = random(y, y - 4)

        const lineUp = instance.makeLine(x1, y, x2, y2)
        lineUp.stroke = props.strokeUp
        lineUp.linewidth = 0.3

        const group = instance.makeGroup(lineUp)
        group.scale = 2.9

        renderedLines.push(lineUp)

        const lineUp2 = instance.makeLine(x1 + 10, y + 10, x2 + 10, y2 + 10)
        lineUp2.stroke = props.strokeUp
        lineUp2.linewidth = 0.3

        const group2 = instance.makeGroup(lineUp2)
        group2.scale = 2.9

        renderedLines.push(lineUp2)
      } else {
        const y1 = random(y, y + 2)
        const x2 = random(x, x + 3)
        const y2 = random(y, y + 3)
        const lineDown = instance.makeLine(x, y1, x2, y2)
        lineDown.stroke = props.strokeDown
        lineDown.linewidth = 0.3

        const group = instance.makeGroup(lineDown)
        group.scale = 2.9

        renderedLines.push(lineDown)

        const lineDown2 = instance.makeLine(x + 10, y1 + 10, x2 + 10, y2 + 10)
        lineDown2.stroke = props.strokeDown
        lineDown2.linewidth = 0.3

        const group2 = instance.makeGroup(lineDown2)
        group2.scale = 2.9

        renderedLines.push(lineDown2)
      }
    }
  }

  return renderedLines
}

function sketch() {
  const triangles = drawTriangle(this.TwoJS, this.props)
  const lines = drawLines(this.TwoJS, this.props)

  startRotation.call(this, triangles, this.props)
  startRotation.call(this, lines, this.props)
}

const DoublyTriangle = createDesign(sketch)

DoublyTriangle.displayName = 'DoublyTriangle'

DoublyTriangle.defaultProps = {
  callback: ctrl => {},
  scaleOffset: 0.05,
  rotationOffset: 2,
  strokeUp: '#ffc0cb',
  strokeDown: '#c6e2ff',
  width: 300,
  height: 300,
  autoplay: true,
  style: { background: '#ff68af' }
}

DoublyTriangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeUp: PropTypes.string,
  strokeDown: PropTypes.string,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  autoplay: PropTypes.bool
}

export { DoublyTriangle }
