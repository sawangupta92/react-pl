import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddToCart from './addToCart'
import { mapStateToProps, mapDispatchToProps } from './../connector/createOrder'

class Wine extends Component {

  render() {
    return (
      <div className="Wine">
        { this.props.wines && this.props.wines.map((row) => {
          return <div key={row.id} className='col-lg-12'>
            <div className='col-lg-4 row'>
              <img src={row.image.large} className="wine-image" alt='wine' />
            </div>
            <div className='col-lg-4 row'>
              Allocation Type: { row.allocation_type }
            </div>
            <div className='col-lg-4 row'>
              Alcohol Percentage: { row.alcohol_percentage }
            </div>
            <div className='col-lg-4 row'>
              Bottle Size: { row.bottle_size }
            </div>
            <div className='col-lg-4 row'>
              Vintage: { row.vintage }
            </div>
            <div className='col-lg-4 row'>
              Wine Name: { row.wine_name }
            </div>
            <div className='col-lg-4 row'>
              Wine Description: { row.wine_description }
            </div>
            <div className='col-lg-12'>
              <AddToCart key={row.id} wine={row} onAddToCartClicked={(quantity) => this.props.AddToCartClicked(row.id, quantity, this.props.currentUser.authentication_token, this.props.order)} />
            </div>
          </div>
        }) }
      </div>
    );
  }
}

Wine = connect(mapStateToProps, mapDispatchToProps)(Wine)

export default Wine;
