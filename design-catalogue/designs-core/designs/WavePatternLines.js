import { startRotation } from '../animations/Rotation'
import { createDesign } from './createDesign'

// Draw wave line pattern
function drawWavyLines(instance, props) {
  const renderedLines = []

  for (let y = 20; y <= 90; y += 5) {
    for (let x = 20; x <= 80; x += 5) {
      if (x % 10 == 0) {
        const lineUp = instance.makeLine(x, y, x + 3, y - 3)
        lineUp.stroke = props.strokeUp
        lineUp.linewidth = 0.7

        const group = instance.makeGroup(lineUp)
        group.scale = props.scale

        renderedLines.push(lineUp)
      } else {
        const lineDown = instance.makeLine(x, y, x + 3, y + 3)
        lineDown.stroke = props.strokeDown
        lineDown.linewidth = 0.7

        const group = instance.makeGroup(lineDown)
        group.scale = props.scale

        renderedLines.push(lineDown)
      }
    }
  }

  return renderedLines
}

function sketch() {
  const renderedLines = drawWavyLines(this.TwoJS, this.props)
  startRotation.call(this, renderedLines, this.props)
}

const WavyLines = createDesign(sketch)

WavyLines.defaultProps = {
  width: 260,
  height: 250,
  strokeUp: '#FFEBE1',
  strokeDown: 'pink',
  scaleOffset: 0.08,
  rotationOffset: 4,
  scale: 2.5,
  callback: instance => {}
}

WavyLines.displayName = 'WavyLines'

export { WavyLines }
