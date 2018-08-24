import { createDesign } from './createDesign'

// This is required for generating different stars
function createSubStars(instance, x, y, radius, sides, props) {
  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  star.fill = props.fill
  star.stroke = props.stroke

  if (radius > 12) {
    createSubStars(
      instance,
      x + radius / props.innerRadiusOffset,
      y,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x - radius / props.innerRadiusOffset,
      y,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x,
      y + radius / props.innerRadiusOffset,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x,
      y - radius / props.innerRadiusOffset,
      radius / props.innerRadiusOffset,
      sides,
      props
    )
  }
}

function createStar(instance, x, y, props) {
  const { length: radius, sides, stroke, fill } = props

  const star = instance.makeStar(x, y, radius, radius - 30, sides)

  star.fill = fill
  star.stroke = stroke

  if (radius > 12) {
    createSubStars(
      instance,
      x + radius / props.outerRadiusOffset,
      y,
      radius / props.outerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x - radius / props.outerRadiusOffset,
      y,
      radius / props.outerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x,
      y + radius / props.outerRadiusOffset,
      radius / props.outerRadiusOffset,
      sides,
      props
    )
    createSubStars(
      instance,
      x,
      y - radius / props.outerRadiusOffset,
      radius / props.outerRadiusOffset,
      sides,
      props
    )
  }
}

function drawStarFractal(instance, props) {
  createStar(instance, instance.width / 2, instance.height / 2, props)
}

function sketch() {
  drawStarFractal(this.TwoJS, this.props)
}

const StarFractal = createDesign(sketch)

StarFractal.displayName = 'StarFractal'

StarFractal.defaultProps = {
  // Length of the fractal
  length: 120,
  height: 400,
  width: 400,
  // Number of sides of star
  sides: 8,
  stroke: 'mistyrose',
  fill: 'pink',
  outerRadiusOffset: 2,
  innerRadiusOffset: 2,
  callback: instance => {}
}

export { StarFractal }
