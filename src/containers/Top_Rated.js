import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestTopRated } from '../actions/top_rated';
import '../styles/Home.css';


const mapStateToProps = (state) => {
    return {
        isPending: state.requestTopRated.isPending,
        top: state.requestTopRated.top,
        error: state.requestTopRated.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestTopRated: () => dispatch(requestTopRated())
    }
}

class Top_Rated extends Component {

    componentDidMount() {
		this.props.onRequestTopRated();
	}

    render() {
		const {top} = this.props;
        // const movies = top.map(i => i.title);
        // const overview = top.map(i => i.overview);
        // const date = top.map(i => i.release_date);
        
        return (
            <div className="pa4">
            <h1 className="dim">Most Rated Movies</h1>
            <div className="">
              <div className="row">
                  {
                    top.map(i => {
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

export default connect (mapStateToProps, mapDispatchToProps)(Top_Rated);