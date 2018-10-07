import * as i from './itemTypes'

export const ITEMS = {
  // consumable
  i.HEALVIAL_I: {
    pname: 'A crimson health vial',
    value: 40,
    shape: SHAPES['uni'],
    slot: ['consumable']
  },

  i.MANAVIAL_I: {
    pname: 'An azure mana vial',
    value: 40,
    shape: SHAPES['uni'],
    slot: ['consumable']
  },
  i.STAMVIAL_I: {
    pname: 'A mossy stamina vial',
    value: 40,
    shape: SHAPES['uni'],
    slot: ['consumable']
  },
  
  // chest
  i.GOLDPLATE_IE: {
    pname: 'A golden-scaled breastplate',
    value: 10000,
    shape: SHAPES['wco'],
    slot: ['chest']
  },

}

export const SLOTS: {
  'quest': 0,

  '1h': 1,
  '2h': 2,
  'offh': 3,

  'head': 4,
  'chest': 5,
  'arms': 6,
  'legs': 7,

  'consumable': 8,
}

export const SHAPES: {
  'uni': [ [1] ],

  'sqr': [ [1,1] ,
           [1,1] ],

  '2ro': [ [1,1] ],
  '2co': [ [1] ,
           [1] ],

  '3ro': [ [1,1,1] ],
  '3co': [ [1] ,
           [1] ,
           [1] ],

  'wro': [ [1,1,1] ,
           [1,1,1] ],
  'wco': [ [1,1] ,
           [1,1] ,
           [1,1] ],
}

