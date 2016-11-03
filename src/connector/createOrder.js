import { setOrder } from './../actions/order'

export const mapStateToProps = (state) => ({
  wines: state.wines,
  currentUser: state.currentUser,
  order: state.order
})

function prepareFormData (variant_id, quantity, order) {
  var formData = new FormData();
  var is_current_line_item_added = false;
  var current_line_item_index = 0;
  if(order===undefined){}else{
    order.regular_wine_line_items.forEach((line_item, index) => {
      let nIndex = index + 1
      let new_quantity = line_item.quantity
      if(line_item.variant_id === variant_id){
        new_quantity = quantity
        is_current_line_item_added = true
        current_line_item_index = nIndex
      }
      if(parseInt(new_quantity) !== 0){
        formData.append( "order[regular_wine_line_items_attributes][" + nIndex + "][variant_id]", line_item.variant_id);
        formData.append( "order[regular_wine_line_items_attributes][" + nIndex + "][quantity]", new_quantity);
      }
    })
  }
  if(!is_current_line_item_added){
    if(parseInt(quantity) !== 0){
      formData.append( "order[regular_wine_line_items_attributes]["+current_line_item_index+"][variant_id]", variant_id);
      formData.append( "order[regular_wine_line_items_attributes]["+current_line_item_index+"][quantity]", quantity);
    }
  }
  return formData;
}

function createOrder(variant_id, quantity, authentication_token, order) {
  var formData = prepareFormData(variant_id, quantity, order)
  var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/orders.json', {
    method: 'POST',
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
  AddToCartClicked: (variant_id, quantity=1, authentication_token, order) => {
    return createOrder(variant_id, quantity, authentication_token, order).then(res => {
      if(res === false){
      } else {
        dispatch(setOrder(res.payload))
      }
    })
  }
})
