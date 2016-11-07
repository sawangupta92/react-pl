import React, { Component } from 'react';
import { connect } from 'react-redux'
import SelectAddress from './SelectAddress'
import AvailableShippingZone from './AvailableShippingZone'
import AddCreditCardDetails from './AddCreditCardDetails'

class Checkout extends Component {

  render() {
    return (
      <div>
        <SelectAddress />
        <AvailableShippingZone />
        <AddCreditCardDetails />
      </div>
    );
  }
}

Checkout = connect()(Checkout)

export default Checkout;
