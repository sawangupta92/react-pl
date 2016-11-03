import React, { Component } from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookie';
import { setOrder } from './../actions/order'

class Cart extends Component {
  constructor() {
    super()
    this.loadCurrentOrder()
  }

  render() {
    return (
      <div className="Cart">
        Total: { this.props.order && this.props.order.total }
      </div>
    );
  }

  setCurrentUser() {
    if(cookie.load("currentUserId")){
      var _this = this
      var req = new Request('http://localhost:3000/api/v1/wineries/1/customers/orders/profile.json', {
        method: 'GET',
        headers: {
          'X-AUTHENTICATION-TOKEN': cookie.load("currentUserId"),
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
  }

  loadCurrentOrder() {
    var _this = this;
    this.setCurrentUser().then(function(json) {
      if(json === false){
        console.log('errors in fetching order')
      } else{
        _this.props.loadOrder(json)
      }
    })
  }

}

const mapStateToProps = (state) => ({
  order: state.order,
  currentUser: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  loadOrder: (data) => {
    dispatch(setOrder(data.payload))
  }
})

Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default Cart;
