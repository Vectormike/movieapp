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
		console.log(top);

        return (
            <div>
                
            </div>
        );
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Top_Rated);