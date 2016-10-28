import React, { Component } from 'react';
import { connect } from 'react-redux'

class AppMenuItem extends Component {

  render() {
    return (
      <div className="AppMenuItem col-md-3">
        { this.props.display_text }
      </div>
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
