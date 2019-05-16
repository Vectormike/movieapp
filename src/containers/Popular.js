import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { requestPopular } from '../actions';
import { requestPopular } from '../actions/popular';


const mapStateToProps = (state) => {
  return {
    popular: state.requestPopular.popular,
    isPending: state.requestPopular.isPending,
    error: state.requestPopular.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPopular: () => dispatch(requestPopular())
  }
}

class Popular extends Component {


  componentDidMount() {
    this.props.onRequestPopular()
  }

  render() {
    const { popular } = this.props;
    const popularMovies = popular.map(i => i.title);
    
    return (
      <div>
        <p>{popularMovies}</p>
      </div>
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Popular);