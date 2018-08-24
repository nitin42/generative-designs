import React from 'react'

import { Button } from './Button'

import { downloadDesign } from '../utils/downloadDesign'

export const DownloadButton = props => (
  <a
    id="download-design"
    download={props.designName}
    style={{ fontSize: '1em' }}
  >
    <Button type="button" onClick={e => downloadDesign(props.canvasId)}>
      Save design
    </Button>
  </a>
)
