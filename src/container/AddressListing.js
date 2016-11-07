import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddressListing extends Component {

  render() {
    return (
      <div>
        <input type='radio' name={this.props.ref_name} value={ this.props.billing_address.id } ref={this.props.ref_name} onClick={(e) => { this.props.onAddressClick(e, this.refs) }} />
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
