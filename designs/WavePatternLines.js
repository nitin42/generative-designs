import PropTypes from 'prop-types'

import { startRotation } from '../animations/Rotation'
import { createDesign } from './createDesign'

// Draw wave line pattern
function drawLines(instance, props) {
  const renderedLines = []

  for (let y = 20; y <= 80; y += 5) {
    for (let x = 20; x <= 80; x += 5) {
      if (x % 10 == 0) {
        const lineUp = instance.makeLine(x, y, x + 3, y - 3)
        lineUp.stroke = props.strokeUp

        const group = instance.makeGroup(lineUp)
        group.scale = 3

        renderedLines.push(lineUp)
      } else {
        const lineDown = instance.makeLine(x, y, x + 3, y + 3)
        lineDown.stroke = props.strokeDown

        const group = instance.makeGroup(lineDown)
        group.scale = 3

        renderedLines.push(lineDown)
      }
    }
  }

  return renderedLines
}

// A function to render the lines. Use this function to perform animations and other two.js stuff
// It is invoked on every state update.
function sketch() {
  const renderedLines = drawLines(this.TwoJS, this.props)
  startRotation.call(this, renderedLines, this.props)
}

const WavyLines = createDesign(sketch)

WavyLines.defaultProps = {
  width: 300,
  height: 300,
  strokeUp: 'mistyrose',
  strokeDown: 'pink',
  scaleOffset: 0.08,
  rotationOffset: 4,
  callback: instance => {}
}

WavyLines.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeUp: PropTypes.string,
  strokeDown: PropTypes.string,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func
}

WavyLines.displayName = 'WavyLines'

export { WavyLines }
