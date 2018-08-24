// Flush Two.js graphics
// It takes a flag to determine whether to clear the current batch and restart, and a callback to perform work.
export function flush({ shouldDequeue }, work) {
  // Clear the current batch of lines and restart from scratch
  if (shouldDequeue) {
    this.TwoJS && this.TwoJS.clear()
  }

  work.call(this)

  this.TwoJS.update()
}
