import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddToCart extends Component {

  render() {
    return (
      <div className="AddToCart">
        <input type='number' ref='item_quantity' />
        <button className='btn-primary' onClick={() => {this.props.onAddToCartClicked(this.refs.item_quantity.value)} }>
          Add To Cart
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   wines: state.wines,
// })

AddToCart = connect()(AddToCart)

export default AddToCart;
