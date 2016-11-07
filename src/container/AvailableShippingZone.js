import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './../connector/AvailableShippingZone'
import ShippingZoneListing from './ShippingZoneListing'

class AvailableShippingZone extends Component {

  render() {
    return (
      <div>
        <h3>
          Select Shipping Zone
        </h3>
        {this.props.available_shipping_zones && this.props.available_shipping_zones.map((shipping_zone) => {
          return <ShippingZoneListing key={shipping_zone.shipping_zone_id} shipping_zone={shipping_zone} onshippingZoneClick={(e, refs) => { this.props.onshippingZoneClick(e, this.props.order, this.props.currentUser.authentication_token, refs)} }/>
        }) }
      </div>
    );
  }
}

AvailableShippingZone = connect(mapStateToProps, mapDispatchToProps)(AvailableShippingZone)

export default AvailableShippingZone;
