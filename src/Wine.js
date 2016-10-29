import React, { Component } from 'react';
import { connect } from 'react-redux'

class Wine extends Component {

  render() {
    return (
      <div className="Wine">
      fdsmklfmdsklfm
        { this.props.wines && this.props.wines.map((row) => {
          return <div key={row.id}>
            { row.allocation_type }
          </div>
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wines: state.wines
})

Wine = connect(mapStateToProps)(Wine)

export default Wine;
