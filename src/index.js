import { StarFractal } from '../designs/Star'
import { FriederLines } from '../designs/FriederLines'
import { WavyLines } from '../designs/WavePatternLines'
import { Circles } from '../designs/Circles'
import { SottsassPattern } from '../designs/Sottsass'
import { DoublyTriangle } from '../designs/DoublyTriangle'
import { Checks } from '../designs/Checks'
import { MemphisDots } from '../designs/MemphisDots'
import { AbstractPoly } from '../designs/AbstractPoly'
import { createDesign } from '../designs/createDesign'
import { startRotation } from '../animations/Rotation'

// Animation modules
const Animations = {
  rotation: startRotation
}

// Main default export
const generative = {
  // Create custom generative art using this HOC design constructor
  createDesign,
  Animations
}

export default generative

// Generative designs
export {
  StarFractal,
  FriederLines,
  WavyLines,
  Circles,
  SottsassPattern,
  DoublyTriangle,
  Checks,
  MemphisDots,
  AbstractPoly
}
