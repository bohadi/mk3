import * as actionTypes from '../constants/actionTypes'
import initialState from '../initialState'
import * as tileTypes from '../constants/tileTypes'

export default function mapReducer(state = initialState.map, action) {
  switch (action.type) {
    case actionTypes.FLOORGEN:
      return {
        ...state,
        ...action,
      };
    case actionTypes.CHANGEFLOOR:
      return {
        ...state,
        ...action,
      };
    default:
      return state
  }
}
