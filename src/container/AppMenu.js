import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AppMenuClick } from './../actions/App'
import { Link } from 'react-router'
import Session from './Session'

class AppMenu extends Component {

  render() {
    return (
      <div className="AppMenu">
        <div className='col-md-3'>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Session />
        </div>
        { this.props.currentUser && this.props.app_menu_items && this.props.app_menu_items.map((row) => {
          return <div key={row.key} onClick={() => { this.props.onAppMenuClick(row.key)} } >
            <div className='col-md-3'>
              <Link to={row.key}>{ row.display_text }</Link>
            </div>
          </div>
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app_menu_items: state.app_menu_items,
  currentUser: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  onAppMenuClick: (key) => {
    dispatch(AppMenuClick(key))
  }
})

AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenu)

export default AppMenu;
