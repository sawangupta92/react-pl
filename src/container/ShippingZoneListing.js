import React, { Component } from 'react';
import { connect } from 'react-redux'

class ShippingZoneListing extends Component {

  render() {
    return (
      <div>
        <input type='radio' name='shipping_zones' value={ this.props.shipping_zone.shipping_zone_id } ref='shipping_zone' onClick={(e) => { this.props.onshippingZoneClick(e, this.refs)} }/>
        { this.props.shipping_zone.method_name } - ${ this.props.shipping_zone.price }
      </div>
    );
  }
}


ShippingZoneListing = connect()(ShippingZoneListing)

export default ShippingZoneListing;
