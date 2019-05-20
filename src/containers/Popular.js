import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { requestPopular } from '../actions';
import { requestPopular } from '../actions/popular';


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


const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  font-family: calibri;
  width: 250px;
  position: relative;
  margin: 100px auto 0;
  text-align: center;
  box-sizing: border-box;
  transition: all 1s;
  cursor: pointer;
  
  &:before {
    content: "";
    background: transparent url(https://images.unsplash.com/photo-1484611941511-3628849e90f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80)no-repeat center center;
    background-size: cover;
    width: 100%;
    display: block;
    height: 100%;
    position: absolute;
    border-radius: 15px;
    transition: all 1.4s;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
  }
  
  &:hover:before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: -50px;
    left: 0;
    right: 0;
    margin: auto;
  } 
`;

const CardInner = styled.div`
  padding: 15px;
`;

class Popular extends Component {


  componentDidMount() {
    this.props.onRequestPopular()
  }

  render() {
    const { popular } = this.props;
    const movies = popular.map(i => i.title);
    const overview = popular.map(i => i.overview);
    const date = popular.map(i => i.release_date);
   
    return (
      <div>
        <Card>
          <CardInner>
              <h2>{movies}</h2>
              <p>{overview}</p>
              <p>{date}</p>
          </CardInner>
        </Card>
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Popular);