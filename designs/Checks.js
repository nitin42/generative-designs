import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

function drawChecks(instance, props) {
  const renderedLines = []

  for (let x = 0; x <= instance.width; x += 20) {
    for (let y = 0; y <= instance.height; y += 20) {
      const line = instance.makeLine(x, y, x + 50, y)
      line.stroke = '#babcc0'
      renderedLines.push(line)
    }
  }

  for (let x = 0; x <= instance.width; x += 20) {
    for (let y = 0; y <= instance.height; y += 20) {
      const line = instance.makeLine(x, y, x, y + 50)
      line.stroke = '#babcc0'
      renderedLines.push(line)
    }
  }

  return renderedLines
}

function sketch() {
  const lines = drawChecks(this.TwoJS, this.props)

  startRotation.call(this, lines, this.props)
}

const Checks = createDesign(sketch)

Checks.defaultProps = {
  callback: inst => {},
  scaleOffset: 0.14,
  rotationOffset: 1.5
}

export { Checks }
