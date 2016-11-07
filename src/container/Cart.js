import React, { Component } from 'react';
import { connect } from 'react-redux'
import cookie from 'react-cookie';
import { setOrder } from './../actions/order'
import { Link } from 'react-router'

class Cart extends Component {
  constructor() {
    super()
    this.loadCurrentOrder()
  }

  render() {
    return (
      <div className="Cart">
        <Link to='/checkout'>
          Total: { this.props.order && this.props.order.total }
          { this.props.order && this.props.order.regular_wine_line_items.map((line_item) => {
            return <div key={line_item.variant_id}>
              { line_item.wine_name } - { line_item.quantity }
            </div>
          })}
        </Link>
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
