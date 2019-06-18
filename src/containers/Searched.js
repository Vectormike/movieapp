import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Home.css';
import { requestSearched } from '../actions/searched';

const mapStateToProps = (state) => {
  return {
    isPending: state.requestSearched.isPending,
    search: state.requestSearched.search,
    error: state.requestSearched.error
  }
}

class Searched extends Component {


    render() {
		const {search} = this.props;
        // const movies = top.map(i => i.title);
        // const overview = top.map(i => i.overview);
        // const date = top.map(i => i.release_date);
        
        return (
            <div className="pa4 ma4">
            <h1 className="grow">Most Rated Movies</h1>
            <div className="">
              <div className="row">
                  {
                    search.map(i => {
                      return (
                        <div key={i.id} className="col-xs-12 col-md-6 col-lg-3">
                          <div className="card">
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
            );
    }
}
export default connect(mapStateToProps, {requestSearched})(Searched);

