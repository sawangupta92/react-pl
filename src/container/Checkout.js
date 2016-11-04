import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddressListing from './AddressListing'
class Checkout extends Component {

  render() {
    return (
      <div>
        <h3>
          Select Billing Address
        </h3>
        {this.props.currentUser && this.props.currentUser.billing_addresses.map((billing_address) => {
          return <AddressListing key={billing_address.id} billing_address={billing_address} />
        }) }
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
