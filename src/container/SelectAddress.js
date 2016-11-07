import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddressListing from './AddressListing'
import { mapStateToProps, mapDispatchToProps } from './../connector/addAddress'

class SelectAddress extends Component {

  render() {
    return (
      <div>
        <h3>
          Select Billing Address
        </h3>
        {this.props.currentUser && this.props.currentUser.billing_addresses.map((billing_address) => {
          return <AddressListing key={billing_address.id} ref_name='billing_address' billing_address={billing_address} onAddressClick={(e, refs) => { this.props.onAddressClick(this.props.currentUser.authentication_token, this.props.order, e, refs)} }/>
        }) }
        <h3>
          Select Shipping Address
        </h3>
        {this.props.currentUser && this.props.currentUser.shipping_addresses.map((shipping_addresses) => {
          return <AddressListing key={shipping_addresses.id} ref_name='shipping_address' billing_address={shipping_addresses} />
        }) }
      </div>
    );
  }
}

SelectAddress = connect(mapStateToProps, mapDispatchToProps)(SelectAddress)

export default SelectAddress;
