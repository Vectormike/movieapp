import React, { Component } from 'react';
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
    // const movies = popular.map(i => i.title);
    // const overview = popular.map(i => i.overview);
    // const date = popular.map(i => i.release_date);
   
    return (
        
        popular.map(i => {
          return (
            <div key={i.id} className="pa3 ma">
            <img  alt='' title='' className="shadow-3"/>
            <dl className="f7 pa2 ma br3 ">
                <dt className="clip">Title</dt>        
                <dd className="ml0 black w-100">{i.title}</dd>
                <dt className="clip">Description</dt>
                <dd className="ml0 black w-100">{i.overview}</dd>
                <dt className="clip">Date</dt>
                <dd className="ml0 black w-100">{i.release_date} <i className="fas fa-heart"></i> </dd>
            </dl>
          </div>
        )
      })
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Popular);