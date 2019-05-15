import React, { Component } from 'react'
import { connect } from 'react-redux';
import { requestPopular } from '../actions';


const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    isPending: state.isPending,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPopular: () => dispatch(requestPopular())
  }
}

class Popular extends Component {


  componentDidMount() {
    console.log(this.props.popular)
  }

  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Popular);