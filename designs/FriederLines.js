import React from 'react'
import P5 from 'p5'
import PropTypes from 'prop-types'

const drawFriederLines = (instance, props) => {
  const drawLines = () => {
    instance.translate(20, -20)
    instance.scale(props.scale)

    for (let x = 20; x <= 85; x += 5) {
      if (x <= 50) {
        instance.stroke(props.strokeVert)
        instance.line(x, 20, x, 85)
      }
    }

    for (let y = 50; y <= 115; y += 5) {
      if (y <= 80) {
        instance.stroke(props.strokeHor)
        instance.line(15, y, 70, y)
      }
    }
  }

  return drawLines
}

export class FriederLines extends React.Component {
  wrapper = React.createRef()

  static defaultProps = {
    width: 500,
    height: 500,
    strokeVert: 'mistyrose',
    strokeHor: 'pink',
    scale: 1
  }

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    strokeVert: PropTypes.string,
    strokeHor: PropTypes.string
  }

  componentDidMount() {
    this.renderLines(this.props)
  }

  renderLines = props =>
    new P5(sketch => {
      const drawLines = drawFriederLines(sketch, props)

      sketch.setup = function() {
        sketch.createCanvas(props.width, props.height)
      }

      sketch.draw = function() {
        drawLines()
      }
    }, this.wrapper.current)

  render() {
    return <div ref={this.wrapper} />
  }
}
