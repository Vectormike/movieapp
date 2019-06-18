import React, { Component } from 'react';
import { requestTheatres } from '../actions/theatres';
import { connect } from 'react-redux';
import '../styles/Home.css';


const mapStateToProps = (state) => {
  return {
    isPending: state.requestTheatres.isPending,
    theatres: state.requestTheatres.theatres,
    error: state.requestTheatres.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestTheatres: () => dispatch(requestTheatres())
  }
}

class Home extends Component {  

  componentDidMount() {
    this.props.onRequestTheatres()
  }

  render() {

    const { theatres } = this.props;
    
    return (
      <div className="">
        <h1 className="grow">In Cinemas now</h1>
        <div className="">
          <div className="row">
              {
                theatres.map(i => {
                  return (
                    <div key={i.id} className="br3 col-xs-12 col-md-6 col-lg-3">
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);