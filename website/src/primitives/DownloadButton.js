import React from 'react'

import { Button } from './Button'

import { downloadDesign } from '../utils/downloadDesign'

export const DownloadButton = props => (
  <a id="download-design" download={props.designName}>
    <Button type="button" onClick={e => downloadDesign(props.canvasId)}>
      Download design
    </Button>
  </a>
)
