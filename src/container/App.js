import React, { Component } from 'react';
import './../App.css';
import './../bootstrap.css';
import { connect } from 'react-redux'
import AppMenu from './AppMenu'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.props.theme_image && this.props.theme_image.small} className="App-logo" alt="logo" />
          <AppMenu />
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  theme_image: state.theme_image
})

App = connect(mapStateToProps)(App)

export default App;
