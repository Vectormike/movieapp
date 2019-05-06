import React from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 20px grey;
  background-color: black;
  width: ${props => (props.barOpened ? "30rem" : "2rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 8rem;
  transition: all 800ms cubic-bezier(0.645, 1.045, 0.355, 1);
`;


const Input = styled.input `
    font-size: 14px;
    background-color: blue;

`;

const Button = styled.button `

`;

function SearchBar() {
    return (
        <div>
            <h1>search bar</h1>
        </div>
    );
}

export default SearchBar;