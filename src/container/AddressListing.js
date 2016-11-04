import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddressListing extends Component {

  render() {
    return (
      <div>
        <input type='checkbox' value={ this.props.billing_address.id } />
        { this.props.billing_address.street } - { this.props.billing_address.city }, { this.props.billing_address.state },
        { this.props.billing_address.zip_code } -
        { this.props.billing_address.country }
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   order: state.order,
//   currentUser: state.currentUser,
// })

AddressListing = connect()(AddressListing)

export default AddressListing;
