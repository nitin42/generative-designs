// Click handler to download the edited design
export const downloadDesign = canvasId => {
  // Serialize the svg to a string and draw it as image on the canvas.
  window.canvg(
    canvasId,
    new XMLSerializer().serializeToString(document.querySelector('svg'))
  )

  const download = document.getElementById('download-design')

  // Get the data url of the image drawn on the canvas and replace it with octet stream so that the image binary can be downloaded
  const image = document
    .getElementById(canvasId)
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')

  // Set the image link
  download.setAttribute('href', image)
}
