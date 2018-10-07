import { combineReducers } from 'redux'
import player from './playerReducer'
import npc from './npcReducer'
import map from './mapReducer'
import hud from './hudReducer'

const rootReducer = combineReducers({
  player, npc, map, hud
});

export default rootReducer
