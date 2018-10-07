import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as playerActions from '../actions/playerActions'

import HudContainer from '../containers/HudContainer'

class PlayerContainer extends Component {
  render() {
    return (
      <div id="playerContainer">
        Player tile composited here! <br />
        <HudContainer />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    player: state.player,
    xpos  : state.xpos,
    ypos  : state.ypos,
    entities: state['map'][state['map']['floorOn']]['entities'],
    itemsOnGround: state['map'][state['map']['floorOn']]['items'][state['map']['xpos']][state['map']['ypos']],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
