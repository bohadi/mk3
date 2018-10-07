import React from 'react';

import { filePaths } from '../constants/filePaths';
import * as t from '../constants/tileTypes';
import * as i from '../constants/itemTypes';
import * as e from '../constants/entityTypes';
import * as p from '../constants/playerTypes';

const ImagePreloader = () => {
  const RELROOT   = '../img/'
  const TILES     = 'tiles/'
  const INVENTORY = 'items/inventory/'
  const EQUIP     = 'items/equip/'
  const ENTITIES  = 'entities/'
  const PLAYER    = 'entities/player/'
  const PNG       = '.png'
  //{<img src={require( makePath(INVENTORY, i.CLAYMORE_IE) )}/>}
  //{<img src={require(RELROOT + TILES     + t.COBBLE1_T    + PNG)} />}
  const makePath = (type, resource) => {
    return RELROOT+type+resource+PNG
  }
  const SIZE = 32 * 2

  // TODO change img symlink solution
  return (
    <div id="preloadContainer">
      {<img src={require('../img/tiles/COBBLE1_T.png')}              width={SIZE} /> }
      {<img src={require('../img/items/inventory/GOLDPLATE_IE.png')} width={SIZE} /> }
      {<img src={require('../img/items/equip/GOLDPLATE_IE.png')}     width={SIZE} /> }
      {<img src={require('../img/entities/ORC_M.png')}               width={SIZE} /> }
      {<img src={require('../img/entities/player/MBASED_P.png')}     width={SIZE} /> }
    </div>
  );
};

export default ImagePreloader;
