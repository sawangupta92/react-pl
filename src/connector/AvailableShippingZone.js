import { setOrder, showCreditCardDetails } from './../actions/order'

function prepareFormData(refs, order) {
  var formData = new FormData();
  formData.append( "order[billing_address_id]", order.billing_address.id);
  formData.append( "order[same_billing_shipping_address]", 1);
  formData.append( "order[shipping_zone_id]", refs.shipping_zone.value);
  return formData
}

function calculateTax (e, order, authentication_token, refs){
  var formData = prepareFormData(refs, order)
  var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/orders/' + order.id + '.json', {
    method: 'PUT',
    body: formData,
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

}

export const mapDispatchToProps = (dispatch) => ({
  onshippingZoneClick: (e, order, authentication_token, refs) => {
    return calculateTax(e, order, authentication_token, refs).then(res => {
      if(res === false){
        console.log('error in shipping zone selection')
      } else {
        dispatch(setOrder(res.payload))
      }
      return res;
    }).then(res => {
      if(res!==false){
        dispatch(showCreditCardDetails())
      }
    })
  }
})

export const mapStateToProps = (state) => ({
  order: state.order,
  currentUser: state.currentUser,
  available_shipping_zones: state.available_shipping_zones
})
