import React from 'react'

export const RangeSlider = props => (
  <input
    type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    name={props.name}
    onChange={e => props.onChange(e, props.name)}
    className="slider"
  />
)
