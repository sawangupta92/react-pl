import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppMenuItem from './AppMenuItem'
import { AppMenuClick } from './actions/App'

class AppMenu extends Component {

  render() {
    return (
      <div className="AppMenu">
        { this.props.app_menu_items && this.props.app_menu_items.map((row) => {
          return <div key={row.key} onClick={() => { this.props.onAppMenuClick(row.key)} } >
            <AppMenuItem {...row}  />
          </div>
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app_menu_items: state.app_menu_items
})

const mapDispatchToProps = (dispatch) => ({
  onAppMenuClick: (key) => {
    dispatch(AppMenuClick(key))
  }
})

AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenu)

export default AppMenu;
