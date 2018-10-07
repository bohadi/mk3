import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Tile from '../components/Tile'
import * as mapActions from '../actions/mapActions'

const style = {
  borderSpacing: 0,
  cellSpacing: 0,
  cellPadding: 0,
  border: 0,
  padding: 0,
  margin: 0,
}

class MapContainer extends Component {
  makeTableBody = () => {
    const compose = (tile, entity, item, player='') => {
      //TODO
    }

    const makeTableRow = (tileRow, i) => {
      var row = []
      for (var j=0; j < tileRow.length; j++) {
        row.push(
          <Tile key={String(i)+','+String(j)} tile={tileRow[j]}/>
        )
      }
      return row
    }

    var tbody = []
    for (var i=0; i<this.props.tiles.length; i++) {
      tbody.push(
        <tr style={style} key={i}>
          {makeTableRow(this.props.tiles[i], i)}
        </tr>
      )
    }
    return tbody
  }

  render() {
    return (
      <div style={style}>
        <table style={style}>
          <tbody style={style}>
            {this.makeTableBody()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiles: state['map'][state['map']['floorOn']]['tiles'],
    entities: state['map'][state['map']['floorOn']]['entities'],
    items: state['map'][state['map']['floorOn']]['items'],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mapActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
