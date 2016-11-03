import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpSubmitActions } from './../actions/Session'

class signUp extends Component {

  signUpSubmitEvent(e) {
    e.preventDefault();
    this.props.signUpSubmit(this.refs.email.value, this.refs.first_name.value, this.refs.last_name.value, this.refs.password.value, this.refs.password_confirmation.value, this.props.router)
  }

  render() {
    return (
      <div>
        <form className='col-md-6' onSubmit={ (e)=> {this.signUpSubmitEvent(e)}}>
          Email:
          <input type='text' name='email' className='form-control' ref='email' />
          first name:
          <input type='text' name='first_name' className='form-control' ref='first_name' />
          lastr name:
          <input type='text' name='last_name' className='form-control' ref='last_name' />
          Password:
          <input type='password' name='password' className='form-control' ref='password' />
          Password Confirmation:
          <input type='password' name='password_confirmation' className='form-control' ref='password_confirmation' />
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

function customersignUp(email, first_name, last_name, password, password_confirmation) {
    var formData = new FormData();
    formData.append( "customer[email]", email);
    formData.append( "customer[password]", password);
    formData.append( "customer[password_confirmation]", password_confirmation);
    formData.append( "customer[first_name]", first_name);
    formData.append( "customer[last_name]", last_name);

    var req = new Request('http://localhost:3000/api/v1/wineries/1/customers.json', {
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
  signUpSubmit: (email, first_name, last_name, password, password_confirmation, router) => {
    return customersignUp(email, first_name, last_name, password, password_confirmation).then(res => {
      if(res === false){
        console.log('errors in signUp')
      } else {
        dispatch(signUpSubmitActions(res))
        router.push('/')
      }
    })
  }
})

signUp = connect(mapStateToProps, mapDispatchToProps)(signUp)

export default signUp;
