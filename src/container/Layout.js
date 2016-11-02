import React, { Component } from 'react';

import { connect } from 'react-redux'
import { onAppLoad } from './../actions/App'
import { signUpSubmitActions } from './../actions/Session'
import App from './App'

class Layout extends Component {
  constructor(layout_content) {
    super(layout_content)
    var _this = this
    var req = new Request('http://localhost:3000/api/v1/wineries/1/app_configurations.json', {
      method: 'GET',
    })
    fetch(req).then(response => response.json())
    .then(function(json) {
      _this.props.renderOnAppLoad(json.payload)
    })
    this.setCurrentUser()
  }

  setCurrentUser() {
    if(sessionStorage.getItem("currentUserId")){
      var _this = this
      var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/profile.json', {
        method: 'GET',
        headers: {
          'X-AUTHENTICATION-TOKEN': sessionStorage.getItem("currentUserId"),
        }
      })

      fetch(req).then(response => response.json())
      .then(function(json) {
        _this.props.setUser(json)
      })
    }
  }

  render() {
    return (
      <div>
        <App />
        <div className="Sidebar">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  theme_image: state.theme_image
})

const mapDispatchToProps = (dispatch) => ({
  renderOnAppLoad: (data) => {
    dispatch(onAppLoad(data))
  },
  setUser: (data) => {
    dispatch(signUpSubmitActions(data))
  }
})

Layout = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default Layout;
