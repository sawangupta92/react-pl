import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../connector/AddCreditCardDetails'

class AddCreditCardDetails extends Component {

  render() {
    return (
      <div>
        <h3>
          Add CC Details
        </h3>
        {this.props.showCreditCardDetails &&
          <form onSubmit={(e) => { this.props.onCCEnter(e, this.refs.cc_token.value, this.props.currentUser.authentication_token, this.props.order) } }>
            <input type='text' ref='cc_token' />
          </form>
        }
      </div>
    );
  }
}

AddCreditCardDetails = connect(mapStateToProps, mapDispatchToProps)(AddCreditCardDetails)

export default AddCreditCardDetails;
