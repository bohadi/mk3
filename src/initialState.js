import { CREATECHAR } from './constants/actionTypes'

export default{
  player:
    {
      name:  'foo',
      class: 'bar',
      lvl: 1,
      xp:  1,
      gil: 10,
      inv: [],
    },

  map: {
    type: CREATECHAR, // the most recent action
    floorOn: 1,
    xpos:    0,
    ypos:    0,

    1: {
      tiles:    [ [ 'COBBLE1_T', 'COBBLE1_T' ] ,
                  [ 'COBBLE1_T', 'COBBLE1_T' ] , ],
      entities: [ [ 'empty', 'empty' ] ,
                  [ 'empty', 'empty' ] , ],
      items:    [ [ 'empty', 'empty' ] ,
                  [ 'empty', 'empty' ] , ],
    } ,

    2: {
      tiles:    [ [ 'empty', 'empty' ] ,
                  [ 'empty', 'empty' ] , ],
      entities: [ [ 'empty', 'empty' ] ,
                  [ 'empty', 'empty' ] , ],
      items:    [ [ 'empty', 'empty' ] ,
                  [ 'empty', 'empty' ] , ],
    } ,

  },

}
