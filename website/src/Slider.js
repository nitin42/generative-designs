import React from 'react'

export const RangeSlider = props => (
  <input
    type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    onChange={props.onChange}
    className="slider"
  />
)
