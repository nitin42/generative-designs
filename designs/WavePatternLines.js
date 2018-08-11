import React from 'react'
import Two from 'two.js'
import PropTypes from 'prop-types'

export class WavyLines extends React.Component {
  wrapper = React.createRef()

  static defaultProps = {
    width: 1000,
    height: 1000,
    strokeUp: 'mistyrose',
    strokeDown: 'pink',
    scale: 1,
    up: 80,
    down: 80,
    scaleOffset: 0.08,
    rotationOffset: 4,
    callback: () => {}
  }

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    strokeUp: PropTypes.string,
    strokeDown: PropTypes.string
  }

  componentDidMount() {
    const container = document.getElementById('wavy-lines')
    const params = { width: this.props.width, height: this.props.height }

    this.TwoJS = new Two(params).appendTo(container)
    this.props.callback(this.TwoJS)

    // flush the rendered lines with shouldDequeue flag set to false because we don't want to clear the current batch of lines
    this.flush({ shouldDequeue: false })
  }

  startAnimation = (lines, { scaleOffset, rotationOffset }) => {
    lines.forEach(line => {
      this.TwoJS.bind('update', frames => {
        if (frames % 2 === 0) {
          if (line.scale > 0.98) {
            line.scale = line.rotation = 0.1
          }

          const t = (1 - line.scale) * scaleOffset

          line.scale += t * 0.8
          line.rotation += t * rotationOffset * 2 * Math.PI
        }
      }).play()
    })
  }

  drawLines = (instance, props) => {
    const renderedLines = []

    for (let y = 20; y <= props.up; y += 5) {
      for (let x = 20; x <= props.down; x += 5) {
        if (x % 10 == 0) {
          const lineUp = instance.makeLine(x, y, x + 3, y - 3)
          lineUp.stroke = props.strokeUp
          const group = instance.makeGroup(lineUp)
          group.scale = 9
          renderedLines.push(lineUp)
        } else {
          const lineDown = instance.makeLine(x, y, x + 3, y + 3)
          lineDown.stroke = props.strokeDown
          const group = instance.makeGroup(lineDown)
          group.scale = 9
          renderedLines.push(lineDown)
        }
      }
    }

    return renderedLines
  }

  componentDidUpdate() {
    this.flush({ shouldDequeue: true })
  }

  flush = ({ shouldDequeue }) => {
    // Clear the current batch of lines and restart from scratch
    if (shouldDequeue) {
      this.TwoJS && this.TwoJS.clear()
    }

    const renderedLines = this.drawLines(this.TwoJS, this.props)

    this.startAnimation(renderedLines, this.props)

    this.TwoJS.update()
  }

  render() {
    return <div id="wavy-lines" />
  }
}
