import React, { Component } from 'react';
import { connect } from 'react-redux'

class AppMenuItem extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <Link to='/'>{ this.props.display_text }</Link>
    );
  }
}

// const mapStateToProps = (state) => ({
//   app_menu_items: state.app_menu_items
// })

// const mapDispatchToProps = (dispatch) => ({
//   renderOnAppLoad: (data) => {
//     dispatch(onAppLoad(data))
//   }
// })

AppMenuItem = connect()(AppMenuItem)

export default AppMenuItem;
