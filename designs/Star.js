import React from 'react'
import Two from 'two.js'
import PropTypes from 'prop-types'

export class StarFractal extends React.Component {
  static defaultProps = {
    // Length of the fractal
    length: 50,
    // Canvas dimension
    height: 500,
    width: 500,
    // Number of sides of star
    sides: 8,
    stroke: 'mistyrose',
    fill: 'pink',
    bg: ''
  }

  static propTypes = {
    length: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    sides: PropTypes.number,
    stroke: PropTypes.string,
    fill: PropTypes.string
  }

  // TwoJS instance
  TwoJS = null

  componentDidMount() {
    const container = document.getElementById('star-fractal')
    const params = {
      width: this.props.width,
      height: this.props.height
    }

    this.TwoJS = new Two(params).appendTo(container)

    this.flush({ shouldDequeue: false })
  }

  drawFractal = (instance, props) => {
    this.draw(instance, instance.width / 2, instance.height / 2, props)
  }

  draw = (instance, x, y, props) => {
    const { length: radius, sides, stroke, fill } = props

    const star = instance.makeStar(x, y, radius, radius - 30, sides)

    star.fill = fill
    star.stroke = stroke

    if (radius > 12) {
      this.drawStars(instance, x + radius / 2, y, radius / 2, sides)
      this.drawStars(instance, x - radius / 2, y, radius / 2, sides)
      this.drawStars(instance, x, y + radius / 2, radius / 2, sides)
      this.drawStars(instance, x, y - radius / 2, radius / 2, sides)
    }
  }

  // This is required for generating different stars
  drawStars = (inst, x, y, radius, sides) => {
    const star = inst.makeStar(x, y, radius, radius - 30, sides)

    star.fill = 'pink'
    star.stroke = 'mistyrose'

    if (radius > 12) {
      this.drawStars(inst, x + radius / 2, y, radius / 2, sides)
      this.drawStars(inst, x - radius / 2, y, radius / 2, sides)
      this.drawStars(inst, x, y + radius / 2, radius / 2, sides)
      this.drawStars(inst, x, y - radius / 2, radius / 2, sides)
    }
  }

  componentDidUpdate() {
    this.flush({ shouldDequeue: true })
  }

  flush = ({ shouldDequeue }) => {
    if (shouldDequeue) {
      this.TwoJS && this.TwoJS.clear()
    }

    this.drawFractal(this.TwoJS, this.props)

    this.TwoJS.update()
  }

  render() {
    const styles = {
      background: this.props.bg,
      display: 'inline-block',
      margin: '20px auto'
    }

    return <div id="star-fractal" style={styles} />
  }
}
