import React, { Component } from 'react';
import './../App.css';
import './../bootstrap.css';
import { connect } from 'react-redux'
import AppMenu from './AppMenu'
import Cart from './Cart'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className='col-lg-6'>
            <img src={this.props.theme_image && this.props.theme_image.small} className="App-logo" alt="logo" />
          </div>
          <div className='col-lg-6'>
            { this.props.currentUser &&
            <Cart />
            }
          </div>
          <div className='col-lg-12'>
            <AppMenu />
          </div>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  theme_image: state.theme_image,
  currentUser: state.currentUser
})

App = connect(mapStateToProps)(App)

export default App;
