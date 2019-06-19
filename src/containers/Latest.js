import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { requestPopular } from '../actions';
import { requestLatest } from '../actions/latest';
import '../styles/Home.css';


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
      <div className="pa4">
        <h1 className="grow">Just Released</h1>
        <div className="">
          <div className="row">
          <div key={latest.id} className="col-xs-12 col-md-6 col-lg-3">
                  <div className="card">
                    <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${latest.poster_path}`} alt='img' title='Image'/>
                      <div className="card-content">
                        <h4 className="card-title">{latest.title}</h4>
                        <p className="card-text">{latest.overview}</p>
                        <p>{latest.vote_average}</p>
                        <p className="tc">Released: {latest.release_date}</p>
                      </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Latest);