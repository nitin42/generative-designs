import { createDesign } from './createDesign'
import { startRotation } from '../animations/Rotation'

const random = (max, min) => Math.floor(Math.random() * (max - min) + min)

const colors = {
  LINE1: '#ff4444',
  LINE2: '#000000',
  LINE3: '#b8bdc1'
}

function draw(offset, color, instance) {
  const circles = []

  for (let x = 10; x <= instance.height; x += 15) {
    const circle = instance.makeCircle(offset, x, random(0, 10), random(0, 10))

    circle.fill = color
    circle.noStroke()

    circles.push(circle)
  }

  return circles
}

function drawPattern(instance, props) {
  let renderedCircles = []

  for (let x = 20; x <= instance.width - 120; x += 20) {
    renderedCircles.push(draw(x, colors.LINE1, instance))
    x += 20

    renderedCircles.push(draw(x, colors.LINE2, instance))
    x += 20

    renderedCircles.push(draw(x, colors.LINE3, instance))
  }

  return renderedCircles
}

function sketch() {
  const circles = drawPattern(this.TwoJS, this.props)

  circles.forEach(objects => {
    startRotation.call(this, objects, this.props)
  })
}

const SottsassPattern = createDesign(sketch)

SottsassPattern.defaultProps = {
  callback: ctrl => {},
  scaleOffset: 0.0245,
  rotationOffset: 4
}

export { SottsassPattern }
