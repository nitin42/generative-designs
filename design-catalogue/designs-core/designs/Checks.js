import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

function drawChecks(instance, props) {
  const renderedLines = []

  for (let x = -15; x <= instance.width; x += props.horizontalGap) {
    for (let y = -15; y <= instance.height; y += props.verticalGap) {
      const line = instance.makeLine(x, y, x + 50, y)
      line.stroke = '#babcc0'

      renderedLines.push(line)
    }
  }

  for (let x = -15; x <= instance.width; x += props.horizontalGap) {
    for (let y = -15; y <= instance.height; y += props.verticalGap) {
      const line = instance.makeLine(x, y, x, y + 50)
      line.stroke = '#babcc0'

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
  width: 300,
  height: 300,
  verticalGap: 20,
  horizontalGap: 20
}

Checks.displayName = 'Checks'

export { Checks }
