import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import { onAppLoad } from './actions/App'
import AppMenu from './AppMenu'

class App extends Component {

  constructor() {
    super()
    var _this = this
    var req = new Request('http://localhost:3000/api/v1/wineries/1/app_configurations.json', {
      method: 'GET',
    })
    fetch(req).then(response => response.json())
    .then(function(json) {
      _this.props.renderOnAppLoad(json.payload)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.props.theme_image && this.props.theme_image.small} className="App-logo" alt="logo" />
          <AppMenu />
        </div>
        <p className="App-intro">
          { this.props.theme && this.props.theme }
        </p>
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
  }
})

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
