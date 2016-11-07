import { setAvailableShippingZone } from './../actions/order'

function getShippingZones(authentication_token, order, e, refs){
  if(refs.billing_address!==undefined){
    var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/orders/' + order.id + '/get_shipping_zones?address_id=' + refs.billing_address.value, {
      method: 'GET',
      headers: {
        'X-AUTHENTICATION-TOKEN': authentication_token,
      }
    })

    return fetch(req).then(req => {
      if(req.status === 200){
        return req.json()
      } else {
        return false
      }
    })

  } else {
    console.log('Billing address not selected')
  }
}

export const mapDispatchToProps = (dispatch) => ({
  onAddressClick: (authentication_token, order, e, refs) => {
    return getShippingZones(authentication_token, order, e, refs).then(res => {
      if(res === false){
        console.log('error in address selection')
      } else {
        dispatch(setAvailableShippingZone(res.payload.available_shipping_zones, refs.billing_address.value))
      }
    })
  }
})

export const mapStateToProps = (state) => ({
  order: state.order,
  currentUser: state.currentUser,
})
