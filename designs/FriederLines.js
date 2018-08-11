import PropTypes from 'prop-types'

import { startRotation } from '../animations/Rotation'
import { createDesign } from './createDesign'

function drawLines(instance, props) {
  const renderedLines = []

  for (let x = 20; x <= 85; x += 5) {
    if (x <= 50) {
      const line1 = instance.makeLine(x, 20, x, 85)
      line1.stroke = props.strokeVert
      line1.linewidth = 0.25

      const group = instance.makeGroup(line1)
      group.scale = 3
      renderedLines.push(line1)
    }
  }

  for (let y = 50; y <= 115; y += 5) {
    if (y <= 80) {
      const line2 = instance.makeLine(15, y, 70, y)
      line2.stroke = props.strokeHor
      line2.linewidth = 0.25

      const group = instance.makeGroup(line2)

      group.scale = 3
      renderedLines.push(line2)
    }
  }

  return renderedLines
}

function sketch() {
  const renderedLines = drawLines(this.TwoJS, this.props)
  startRotation.call(this, renderedLines, this.props)
}

const FriederLines = createDesign(sketch)

FriederLines.displayName = 'FriederLines'

FriederLines.defaultProps = {
  strokeVert: 'mistyrose',
  strokeHor: 'pink',

  bg: '#2d121a',

  scaleOffset: 0.08,
  rotationOffset: 4,

  height: 550,
  width: 520,

  callback: ctrl => {}
}

FriederLines.propTypes = {
  strokeVert: PropTypes.string,
  strokeHor: PropTypes.string,

  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,

  height: PropTypes.number,
  width: PropTypes.number,

  callback: PropTypes.func,

  bg: PropTypes.string
}

export { FriederLines }
