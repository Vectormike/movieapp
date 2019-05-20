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
        const movies = top.map(i => i.title);
        const overview = top.map(i => i.overview);
        const date = top.map(i => i.release_date);
        
        return (
            <div>
                <p>{movies}</p>
                <p>{overview}</p>
                <p>{date}</p>
            </div>
        );
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Top_Rated);