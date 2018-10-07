import * as actionTypes from '../constants/actionTypes'
import initialState from '../initialState'
import * as playerTypes from '../constants/playerTypes'

export default function playerReducer(state = initialState.player, action) {
  let newState = []

  switch (action.type) {
    case actionTypes.J_KEY: { }
    case actionTypes.K_KEY: { }
    case actionTypes.H_KEY: { }
    case actionTypes.L_KEY: { }
    case actionTypes.Y_KEY: { }
    case actionTypes.U_KEY: { }
    case actionTypes.B_KEY: { }
    case actionTypes.N_KEY: { }

    case actionTypes.CREATECHAR: {
      return Object.assign({}, state, {
      });
    }

    default:
      return state
  }
}
