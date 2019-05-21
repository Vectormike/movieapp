import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestTopRated } from '../actions/top_rated';


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
            top.map(i => {
                return (
                  <div key={i.id} className="pa3 ma">
                  <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt='img' title='Image' className="shadow-3"/>
                  <dl className="f7 pa2 ma br3 ">
                      <dt className="clip">Title</dt>        
                      <dd className="ml0 black w-100">{i.title}</dd>
                      <dt className="clip">Description</dt>
                      <dd className="ml0 black w-100">{i.overview}</dd>
                      <dt className="clip">Vote average</dt>
                      <dd className="ml0 black w-100">{i.vote_average}</dd>
                      <dt className="clip">Date</dt>
                      <dd className="ml0 black w-100">{i.release_date} <i className="fas fa-heart"></i> </dd>
                  </dl>
                </div>
              )
            })
        );
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Top_Rated);