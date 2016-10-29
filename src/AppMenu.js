import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AppMenuClick } from './actions/App'
import { Link } from 'react-router'


class AppMenu extends Component {

  render() {
    return (
      <div className="AppMenu">
        <div className='col-md-3'>
          <Link to='/'>Home</Link>
        </div>
        { this.props.app_menu_items && this.props.app_menu_items.map((row) => {
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
  app_menu_items: state.app_menu_items
})

const mapDispatchToProps = (dispatch) => ({
  onAppMenuClick: (key) => {
    dispatch(AppMenuClick(key))
  }
})

AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenu)

export default AppMenu;
