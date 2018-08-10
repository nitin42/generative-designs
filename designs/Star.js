import React from 'react'
import Two from 'two.js'
import PropTypes from 'prop-types'

const drawStar = (inst, x, y, radius, sides) => {
	const star = inst.makeStar(x, y, radius, radius - 30, sides)

	star.fill = 'pink'
	star.stroke = 'mistyrose'

	if (radius > 12) {
		drawStar(inst, x + radius / 2, y, radius / 2, sides)
		drawStar(inst, x - radius / 2, y, radius / 2, sides)
		drawStar(inst, x, y + radius / 2, radius / 2, sides)
		drawStar(inst, x, y - radius / 2, radius / 2, sides)
	}
}

const renderFractal = (value, inst, sides) => {
	drawStar(inst, inst.width / 2, inst.height / 2, value, sides)
}

export class StarFractal extends React.Component {
	state = {
		svg: null,
	}

	static defaultProps = {
		// Length of the fractal
		length: 50,
		// Canvas dimension
		height: 200,
		width: 200,
		// Number of sides of star
		sides: 8,
	}

	static propTypes = {
		length: PropTypes.number,
		height: PropTypes.number,
		width: PropTypes.number,
		sides: PropTypes.number,
	}

	// TwoJS instance
	TwoJS = null

	componentDidMount() {
		const container = document.getElementById('star-fractal')

		this.TwoJS = new Two({
			width: this.props.width,
			height: this.props.height,
		}).appendTo(container)

		renderFractal(this.props.length, this.TwoJS, this.props.sides)
		this.TwoJS.update()

		this.setState({ svg: this.TwoJS.renderer.domElement })
	}

	componentWillReceiveProps(nextProps) {
		renderFractal(nextProps.length, this.TwoJS, this.props.sides)
		this.TwoJS.update()
	}

	componentDidUpdate() {
		renderFractal(this.props.length, this.TwoJS, this.props.sides)
		this.TwoJS.update()
	}

	render() {
		return <div id="star-fractal">{this.props.children(this.state.svg)}</div>
	}
}
