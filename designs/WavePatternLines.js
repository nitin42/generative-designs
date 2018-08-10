import React from 'react'
import P5 from 'p5'
import PropTypes from 'prop-types'

const drawWaveLines = (instance, props) => {
  const drawLines = () => {
    instance.translate(-20, -20)
    instance.scale(props.scale)

    for (let y = 20; y <= props.up; y += 5) {
      for (let x = 20; x <= props.down; x += 5) {
        if (x % 10 == 0) {
          instance.stroke(props.strokeUp)
          instance.line(x, y, x + 3, y - 3)
        } else {
          instance.stroke(props.strokeDown)
          instance.line(x, y, x + 3, y + 3)
        }
      }
    }
  }

  return drawLines
}

export class WavyLines extends React.Component {
  wrapper = React.createRef()

  static defaultProps = {
    width: 500,
    height: 500,
    strokeUp: 'mistyrose',
    strokeDown: 'pink',
    scale: 1,
    up: 80,
    down: 80
  }

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    strokeUp: PropTypes.string,
    strokeDown: PropTypes.string,
    up: PropTypes.number,
    down: PropTypes.number
  }

  componentDidMount() {
    this.renderLines(this.props)
  }

  renderLines = props =>
    new P5(sketch => {
      const drawLines = drawWaveLines(sketch, props)

      sketch.setup = function() {
        sketch.createCanvas(props.width, props.height)
      }

      console.log(sketch.mousePressed)

      sketch.draw = function() {
        drawLines()
      }
    }, this.wrapper.current)

  render() {
    return <div ref={this.wrapper} />
  }
}
