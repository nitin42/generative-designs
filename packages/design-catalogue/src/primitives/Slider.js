import React from 'react'

export const RangeSlider = props => (
  <input
    type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    name={props.name}
    step={props.step || 1}
    onChange={props.onChange}
    className="slider"
  />
)
