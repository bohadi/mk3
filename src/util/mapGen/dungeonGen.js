import * as randomUtil from '../randomUtil'

import * as t from '../../constants/tileTypes'
import * as i from '../../constants/itemTypes'
import * as e from '../../constants/entityTypes'

export function placePlayer(generated) {
  return [1,1]
}

export function generateFloor(floor=1, size=5, type='D') {
  return {
    tiles: cobbleSq(5), 
    entities: emptyDims(5,5), 
    items: emptyDims(5,5), 
  }
}

const emptyDims = (l,w) => {
  var ret = new Array(l)
  for (var i=0; i<l; i++) {
    ret[i] = new Array(w)
  }
  return ret
}

const cobbleSq = (s=5) => {
  return [
    [t.COBBLE1_T, t.COBBLE1_T, t.COBBLE1_T, t.COBBLE1_T, t.COBBLE1_T, ],
    [t.COBBLE9_T, t.COBBLE9_T, t.COBBLE9_T, t.COBBLE9_T, t.COBBLE9_T, ],
    [t.COBBLE3_T, t.COBBLE6_T, t.COBBLE8_T, t.COBBLE2_T, t.COBBLE4_T, ],
    [t.COBBLE5_T, t.COBBLE7_T, t.COBBLE1_T, t.COBBLE9_T, t.COBBLE1_T, ],
    [t.COBBLE4_T, t.COBBLE4_T, t.COBBLE4_T, t.COBBLE4_T, t.COBBLE4_T, ],
  ]
}
