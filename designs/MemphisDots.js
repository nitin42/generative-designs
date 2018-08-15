import PropTypes from 'prop-types'

import { createDesign } from './createDesign'
import { random } from '../utils'
import { startRotation } from '../animations/Rotation'

function drawDots(instance, props) {
  const renderedDots = []

  for (let x = 20; x <= 280; x += 15) {
    for (let y = 20; y <= 280; y += 15) {
      const circle = instance.makeCircle(x, y, 1)
      circle.fill = '#00004c'
      circle.noStroke()

      const group = instance.makeGroup(circle)
      group.scale = props.scale

      renderedDots.push(circle)
    }
  }
  return renderedDots
}

function sketch() {
  const dots = drawDots(this.TwoJS, this.props)

  startRotation.call(this, dots, this.props)
}

const MemphisDots = createDesign(sketch)

MemphisDots.defaultProps = {
  callback: inst => {},
  scaleOffset: 0.0245,
  rotationOffset: 4,
  height: 300,
  width: 300,
  scale: 1,
  autoplay: true
}

MemphisDots.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  scaleOffset: PropTypes.number,
  rotationOffset: PropTypes.number,
  callback: PropTypes.func,
  autoplay: PropTypes.bool
}

MemphisDots.displayName = 'Memphis Dots'

export { MemphisDots }
