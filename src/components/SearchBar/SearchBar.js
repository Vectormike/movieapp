import React, { useState, useLayoutEffect, useRef } from 'react';

import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 20px grey;
  background-color: black;
  width: ${props => (props.searchOpen ? "30rem" : "2rem")};
  cursor: ${props => (props.searchOpen ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 8rem;
  transition: all 800ms cubic-bezier(0.645, 1.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 12px;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.searchOpen ? "1rem" : "0rem")};
  border: none;
  transition: all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  
  &::placeholder {
    color: blue;
  }
  
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.searchOpen ? "auto" : "none")};
  cursor: ${props => (props.searchOpen ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

function SearchBar() {

    const [value, setValue] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

    useLayoutEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", onClick);
        // cleanup event when unmounted
        return () => {
          document.removeEventListener("mousedown", onClick);
        };
      }, []);

    // When user clicks outside of the form, set bar opened to false, to close it
    const onClick = (e) => {
        if (formRef.current.contains(e.target)) {
            // click was inside form, do nothing
            return;
        }
        console.log("Click outside the form, close it");
        searchOpen(false);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        setValue(e)
        setSearchOpen(false);
    }
  
    return (
        <div>
            <Form>
                searchOpen={searchOpen}
                onSubmit={onSubmit}
                onClick={setSearchOpen(true)}, onClick={inputFocus.current.focus}
                ref={formRef}
            </Form>
        </div>
    );
}

export default SearchBar;