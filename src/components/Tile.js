import React from 'react';
import * as tileTypes from './../constants/tileTypes';

const tdS = {
  borderSpacing: 0,
  cellSpacing: 0,
  cellPadding: 0,
  border: 0,
  padding: 0,
  margin: 0,
}
const imgS = {
  width: 32 * 2,
}

const Tile = (props) => {
  return (
    <td style={tdS}>
      { <img style={imgS} src={require('../img/tiles/'+props.tile+'.png')} /> }
    </td>
  );
}

export default Tile;
