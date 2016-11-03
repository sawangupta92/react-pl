import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddressListing extends Component {

  render() {
    return (
      <div>
      HULA
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
