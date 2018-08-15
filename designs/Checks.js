import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

function drawChecks(instance, props) {
  const renderedLines = []

  for (let x = -15; x <= instance.width; x += 20) {
    for (let y = -15; y <= instance.height; y += 20) {
      const line = instance.makeLine(x, y, x + 50, y)
      line.stroke = props.stroke

      renderedLines.push(line)
    }
  }

  for (let x = -15; x <= instance.width; x += 20) {
    for (let y = -15; y <= instance.height; y += 20) {
      const line = instance.makeLine(x, y, x, y + 50)
      line.stroke = props.stroke

      renderedLines.push(line)
    }
  }

  return renderedLines
}

function sketch() {
  const checks = drawChecks(this.TwoJS, this.props)

  this.props.autoplay ? startRotation.call(this, checks, this.props) : null
}

const Checks = createDesign(sketch)

Checks.defaultProps = {
  callback: inst => {},
  scaleOffset: 0.14,
  rotationOffset: 1.5,
  stroke: '#babcc0',
  width: 300,
  height: 300,
  style: { display: 'inline-block' },
  autoplay: true
}

Checks.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  autoplay: PropTypes.bool
}

Checks.displayName = 'Checks'

export { Checks }
