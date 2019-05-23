import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { requestPopular } from '../actions';
import { requestLatest } from '../actions/latest';


const mapStateToProps = (state) => {
  return {
    latest: state.requestLatest.latest,
    isPending: state.requestLatest.isPending,
    error: state.requestLatest.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestLatest: () => dispatch(requestLatest())
  }
}

class Latest extends Component {

  componentDidMount() {
    this.props.onRequestLatest()
  }

  render() {
    const { latest } = this.props;
    // const movies = popular.map(i => i.title);
    // const overview = popular.map(i => i.overview);
    
    return (
            <div className="container">
              <div className="row">
                  <div  className="col-xs-12 col-md-12 col-lg-12 pa3 ma">
                    <img src={`https://image.tmdb.org/t/p/w500/${latest.poster_path}`} alt='img' title={latest.title} className="shadow-3"/>
                    <dl className="f7 pa2 ma br3 ">
                        <dt className="clip">Title</dt>        
                        <dd className="ml0 black w-100">{latest.title}</dd>
                        <dt className="clip">Description</dt>
                        <dd className="ml0 black w-100">{latest.overview}</dd>
                        <dt className="clip">Vote average</dt>
                        <dd className="ml0 black w-100">{latest.vote_average}</dd>
                        <dt className="clip">Date</dt>
                        <dd className="ml0 black w-100">{latest.release_date} <i className="fas fa-heart"></i> </dd>
                    </dl>
                </div>
              </div>
            </div>
          )
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Latest);