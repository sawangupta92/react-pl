import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpSubmitActions } from './../actions/Session'

class logIn extends Component {

  logInSubmitEvent(e) {
    e.preventDefault();
    this.props.logInSubmit(this.refs.email.value, this.refs.password.value)
  }

  render() {
    return (
      <div>
        hello
        <form className='col-md-6' onSubmit={ (e)=> {this.logInSubmitEvent(e)}}>
          Email:
          <input type='text' name='email' className='form-control' ref='email' />
          Password:
          <input type='password' name='password' className='form-control' ref='password' />
          <br/>
          <input type='submit' className='form-control btn-primary' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
})

function customerLogIn(email, password) {
    var formData = new FormData();
    formData.append( "customer[email]", email);
    formData.append( "customer[password]", password);

    var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/login.json', {
      method: 'POST',
      body: formData
    })
    return fetch(req).then(req => {
      if(req.status === 200){
        return req.json()
      } else {
        return false
      }
    })
}

const mapDispatchToProps = (dispatch) => ({
  logInSubmit: (email, password) => {
    return customerLogIn(email, password).then(res => {
      if(res === false){
        console.log('errors in Login')
      } else {
        dispatch(signUpSubmitActions(res))
      }
    })
  }
})

logIn = connect(mapStateToProps, mapDispatchToProps)(logIn)

export default logIn;
