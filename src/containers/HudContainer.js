import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as hudActions from '../actions/hudActions'

class HudContainer extends Component {
  render() {
    return (
      <div id="hudContainer">
        Player Status goes here! <br />
        Minimap goes here! <br />
        Inventory goes here! <br />
        Spell/ability slots go here! <br />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    player:  state.player,
    floorOn: state.floorOn,
    itemsOnGround: state['map'][state['map']['floorOn']]['items'][state['map']['xpos']][state['map']['ypos']],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(hudActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HudContainer);
