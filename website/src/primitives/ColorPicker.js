import React from 'react'
import { css } from 'emotion'
import { CompactPicker } from 'react-color'

export const ColorPicker = props => {
  return (
    <React.Fragment>
      <span>{props.name}</span>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: '5px',
          backgroundColor: props.color,
          display: 'inline-block',
          marginLeft: 30,
          marginBottom: -4
        }}
        onClick={props.clickHandler}
      />
      {props.show ? (
        <div
          style={{
            marginTop: '10px',
            position: 'relative'
          }}
        >
          <CompactPicker
            color={props.color}
            onChange={props.handleColorChange}
          />
        </div>
      ) : null}
    </React.Fragment>
  )
}
