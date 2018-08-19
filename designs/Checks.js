import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

function drawChecks(instance, props) {
  const renderedLines = []

  for (let x = -15; x <= instance.width; x += props.horizontalGap) {
    for (let y = -15; y <= instance.height; y += props.verticalGap) {
      const line = instance.makeLine(x, y, x + 80, y)
      line.stroke = props.stroke

      renderedLines.push(line)
    }
  }

  for (let x = -15; x <= instance.width; x += props.horizontalGap) {
    for (let y = -15; y <= instance.height; y += props.verticalGap) {
      const line = instance.makeLine(x, y, x, y + 20)
      line.stroke = props.fill

      renderedLines.push(line)
    }
  }

  return renderedLines
}

function sketch() {
  const checks = drawChecks(this.TwoJS, this.props)
  startRotation.call(this, checks, this.props)
}

const Checks = createDesign(sketch)

Checks.defaultProps = {
  callback: inst => {},
  scaleOffset: 0.1,
  rotationOffset: 1.5,
  stroke: '#babcc0',
  fill: '#babcc0',
  width: 300,
  height: 300,
  verticalGap: 20,
  horizontalGap: 20,
  link: 'checks',
  hasDetailsPage: true,
  style: { display: 'inline-block' }
}

Checks.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  scaleOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rotationOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  callback: PropTypes.func
}

Checks.displayName = 'Checks'

export { Checks }
