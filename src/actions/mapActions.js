import { FLOORGEN } from './../constants/actionTypes'
import { generateFloor, placePlayer } from '../util/mapGen/dungeonGen'

export const newFloor = (floor, size, type) => {
  const generated = generateFloor(floor, size, type)
  const [xpos,ypos] = placePlayer(generated)

  return {
    type: FLOORGEN,
    floorOn: floor,
    xpos: xpos,
    ypos: ypos,
    [floor]: generated,
  }
}
