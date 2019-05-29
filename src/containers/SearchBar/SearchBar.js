import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { requestSearched } from './';

const mapStateToProps = (state) => {
  return {
    isPending: state.requestSearched.isPending,
    searched: state.requestSearched.searched,
    error: state.requestSearched.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSearched: (e) => dispatch(requestSearched(e.target.value))
  }
}


const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 20px grey;
  background-color: grey;
  width: ${props => (props.searchOpen ? "20rem" : "1rem")};
  cursor: ${props => (props.searchOpen ? "auto" : "pointer")};
  padding: 2rem;
  height: 1rem;
  border-radius: 8rem;
  transition: all 800ms cubic-bezier(0.645, 1.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 20px;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.searchOpen ? "1rem" : "0rem")};
  border: none;
  transition: all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &::placeholder {
    color: white;
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

    const [results, setResults] = useState([])
    const [value, setValue] = useState("");
    const [searchOpen, setSearchOpen] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

    useLayoutEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", mouseClick);
        // cleanup event when unmounted
        return () => {
          document.removeEventListener("mousedown", mouseClick);
        };
      }, []);
      
    useEffect(() => {

    }, [])
      
    const mouseClick = (e) => {
        if (formRef.current.contains(e.target)) {
          return;
        }
        setSearchOpen(false);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        setValue(e)
        setSearchOpen(false);
    }

    const onClick = () => {
      setSearchOpen(true); 
      inputFocus.current.focus();
    }
  
    const onChange = (e) => {
      setValue(e.target.value);  
    }
    return (
        <div>
            <Form
                searchOpen={searchOpen}
                onSubmit={onSubmit}
                onClick={onClick}
                ref={formRef}
            >    
                <Button
                type="submit"
                searchOpen={searchOpen}
                >
                  <FontAwesomeIcon icon={faSearch} size="2x" />
                </Button>
                <Input
                onChange={onChange}
                ref={inputFocus}
                searchOpen={searchOpen}
                value={value}
                placeholder='Search for a movie'
                />
            </Form>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


// Credit => https://codesandbox.io/s/731r7084p0