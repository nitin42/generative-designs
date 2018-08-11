import React from 'react'
import PropTypes from 'prop-types'
import Two from 'two.js'

export class FriederLines extends React.Component {
  static defaultProps = {
    strokeVert: 'mistyrose',
    strokeHor: 'pink',
    bg: '#2d121a',
    scaleOffset: 0.08,
    rotationOffset: 4,
    callback: ctrl => {}
  }

  static propTypes = {
    scale: PropTypes.number,
    strokeVert: PropTypes.string,
    strokeHor: PropTypes.string,
    scaleOffset: PropTypes.number,
    rotationOffset: PropTypes.number
  }

  // Main TwoJS instance
  TwoJS = null

  componentDidMount() {
    const container = document.getElementById('frieder')
    const params = { width: 520, height: 550 }

    this.TwoJS = new Two(params).appendTo(container)
    this.props.callback(this.TwoJS)

    // flush the rendered lines with shouldDequeue flag set to false because we don't want to clear the current batch of lines
    this.flush({ shouldDequeue: false })
  }

  startAnimation = (lines, { scaleOffset, rotationOffset }) => {
    lines.forEach(line => {
      this.TwoJS.bind('update', frames => {
        // This will be called on every 2N frame
        if (frames % 2 === 0) {
          if (line.scale > 0.9999) {
            line.scale = line.rotation = 0
          }

          const t = (1 - line.scale) * scaleOffset

          line.scale += t
          line.rotation += t * rotationOffset * Math.PI
        }
      }).play()
    })
  }

  componentDidUpdate() {
    // An update occurred. So restart from scratch and clear the current batch of lines
    this.flush({ shouldDequeue: true })
  }

  drawLines = (instance, props) => {
    const renderedLines = []

    for (let x = 20; x <= 85; x += 5) {
      if (x <= 50) {
        const line1 = instance.makeLine(x, 20, x, 85)
        line1.stroke = props.strokeVert
        line1.linewidth = 0.25

        const group = instance.makeGroup(line1)
        group.scale = 6
        renderedLines.push(line1)
      }
    }

    for (let y = 50; y <= 115; y += 5) {
      if (y <= 80) {
        const line2 = instance.makeLine(15, y, 70, y)
        line2.stroke = props.strokeHor
        line2.linewidth = 0.25

        const group = instance.makeGroup(line2)

        group.scale = 6
        renderedLines.push(line2)
      }
    }

    return renderedLines
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
    const styles = {
      background: this.props.bg,
      display: 'inline-block',
      margin: '20px auto'
    }

    return <div id="frieder" style={styles} />
  }
}
