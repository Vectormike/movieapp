import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { requestPopular } from '../actions';
import { requestPopular } from '../actions/popular';
import '../styles/Home.css';


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
      <div className="">
        <h1 className="grow">Popular Movies</h1>
        <div className="">
          <div className="row">
              {
                popular.map(i => {
                  return (
                    <div key={i.id} className="col-xs-12 col-md-6 col-lg-3">
                      <div className="card c">
                        <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt='img' title='Image'/>
                          <div className="card-content">
                            <h4 className="card-title">{i.title}</h4>
                            <p className="card-text">{i.overview}</p>
                            <p>{i.vote_average}</p>
                            <p className="tc">Released: {i.release_date}</p>
                          </div>
                      </div>
                    </div>
                  )
                })
              }      
          </div>
        </div>
    </div>

    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Popular);