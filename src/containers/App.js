import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as mapActions from '../actions/mapActions'

import ImagePreloader from '../components/ImagePreloader'
import MapContainer from '../containers/MapContainer'
import PlayerContainer from '../containers/PlayerContainer'

import { generateFloor } from '../util/mapGen/dungeonGen'

const FLOORSIZE = 5
const FLOORTYPE = 'D'
const style = {
  display: 'flex',
  justifyContent: 'center',
}

class App extends Component {
  componentDidMount() {
    // TODO title screen, character creation, load save
    this.props.actions.newFloor(1, FLOORSIZE, FLOORTYPE)
  }

  render() {
    return (
      <div style={style}>
        {/* <ImagePreloader /> */}
        <MapContainer />
        <PlayerContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mapActions, dispatch)
  };
}

export default App = connect(
  null,
  mapDispatchToProps
)(App);
