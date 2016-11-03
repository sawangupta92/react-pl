import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddressListing from './AddressListing'
class Checkout extends Component {

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  currentUser: state.currentUser,
})

Checkout = connect(mapStateToProps)(Checkout)

export default Checkout;
