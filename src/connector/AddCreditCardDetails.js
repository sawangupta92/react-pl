import { setOrder } from './../actions/order'

function charge(e, cc_token, authentication_token, order){
  var formData = new FormData();
  formData.append( "order[token]", cc_token);
  var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/orders/' + order.id + '/authorize_and_place.json', {
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
  onCCEnter: (e, cc_token, authentication_token, order) => {
    e.preventDefault();
    return charge(e, cc_token, authentication_token, order).then(res => {
      if(res === false){
        console.log('error in payment')
      } else {
        dispatch(setOrder(res.payload))
      }
    })
  }
})

export const mapStateToProps = (state) => ({
  order: state.order,
  currentUser: state.currentUser,
  available_shipping_zones: state.available_shipping_zones,
  showCreditCardDetails: state.showCreditCardDetails,
})
