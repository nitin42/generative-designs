import React from 'react'

// This is required to paint the svg onto the canvas and then make an octet stream using `toDataURI()` on the canvas element for downloading the design
export const ShadowCanvas = ({ id }) => (
  <canvas id={id} width="1000px" height="600px" style={{ display: 'none' }} />
)
