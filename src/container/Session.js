import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import fetch from 'isomorphic-fetch'
import { logOutSubmitActions } from './../actions/Session'

class Session extends Component {

  logOutSubmitEvent(e) {
    e.preventDefault();
    this.props.logOutSubmit(this.props.currentUser.authentication_token)
  }

  render() {
    return (
      <div>
        {!this.props.currentUser &&
          <div>
            <div className='col-md-3'>
              <Link to='/signUp'>signUp</Link>
            </div>
            <div className='col-md-3'>
              <Link to='/logIn'>logIn</Link>
            </div>
          </div>
        }
        {
          this.props.currentUser &&
          <div className='col-md-3'>
            <a onClick={ (e)=> {this.logOutSubmitEvent(e)} }>Logout</a>
          </div>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
})

function customerLogOut(authentication_token) {

  var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/logout.json', {
    method: 'DELETE',
    headers: {
      'X-AUTHENTICATION-TOKEN': authentication_token,
    }
  })

  return fetch(req).then(req => {
    if(req.status === 200){
      return true
    } else {
      return false
    }
  })
}

const mapDispatchToProps = (dispatch) => ({
  logOutSubmit: (authentication_token) => {
    return customerLogOut(authentication_token).then(res => {
      if(res === false){
      } else {
        dispatch(logOutSubmitActions(authentication_token))
      }
    })
  }
})

Session = connect(mapStateToProps, mapDispatchToProps)(Session)

export default Session;
