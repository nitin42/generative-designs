export function startRotation(objects, props) {
  objects.forEach(object => {
    this.TwoJS.bind('update', frames => {
      // This is called every 2N frames
      if (this.TwoJS.playing) {
        if (frames % 2 === 0) {
          if (object.scale > 0.9999) {
            object.scale = object.rotation = 0
          }

          const t = (1 - object.scale) * props.scaleOffset

          object.scale += t
          object.rotation += t * props.rotationOffset * Math.PI
        }
      }
    })
  })
}
