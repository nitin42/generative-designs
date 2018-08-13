import { createDesign } from './createDesign'
import { random } from '../utils'
import { startRotation } from '../animations/Rotation'

function drawDots(instance, props) {
  const renderedDots = []

  for (let x = 20; x <= 280; x += 15) {
    for (let y = 20; y <= 280; y += 15) {
      const circle = instance.makeCircle(x, y, 1.8)
      circle.fill = '#00004c'

      circle.noStroke()

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
  rotationOffset: 4
}

export { MemphisDots }
