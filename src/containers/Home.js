import React, { Component } from 'react';
import { requestTheatres } from '../actions/theatres';
import { connect } from 'react-redux';


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
      <div>
        <h1>In Cinemas now</h1>

        {
          theatres.map(i => {
            return (
              <div className="container">
                <div className="row">
                  <div key={i.id} className="col-xs-12 col-md-6 col-lg-3 ">
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
                </div>
              </div>
              
            )
          })
        }
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);