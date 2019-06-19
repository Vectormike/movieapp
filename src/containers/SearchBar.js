import React, { Component } from 'react';
// import styled from 'styled-components';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchBar.css'
import { connect } from 'react-redux';
import { requestSearched } from '../actions/searched';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isPending: state.requestSearched.isPending,
    search: state.requestSearched.search,
    error: state.requestSearched.error
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRequestSearched: () => dispatch(requestSearched())
//   }
// }

 
class SearchBar extends Component{

  
  onChange = (e) => {
    this.props.requestSearched(e.target.value)
  } 
  
  onKeyPress = (e) => {
    if(e.keyCode === 13 || e.charCode === 13) {
      this.props.requestSearched(e.target.value)
    }
  } 
 
  render() {
    return (
      <div className="search-bar ">
          <div className="field">
            <label htmlFor="search">Search for a movie...</label>
            <div className="input">
              <input 
                id="search" 
                type="text" 
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                autoComplete="off"
              />
            </div>
          </div>
          <Link style={
            {
              textDecoration: 'none'
            }
          } to="/searched">
            <button 
              type="submit" 
              className="grow ma2 searchButton"
            >
              <i className="fa fa-search"></i>
            </button>
          </Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, {requestSearched}) (SearchBar);




























// const Form = styled.form`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 1px 20px grey;
//   background-color: grey;
//   width: ${props => (props.searchOpen ? "20rem" : "1rem")};
//   cursor: ${props => (props.searchOpen ? "auto" : "pointer")};
//   padding: 2rem;
//   height: 1rem;
//   border-radius: 8rem;
//   transition: all 800ms cubic-bezier(0.645, 1.045, 0.355, 1);
// `;

// const Input = styled.input`
//   font-size: 20px;
//   background-color: transparent;
//   width: 100%;
//   margin-left: ${props => (props.searchOpen ? "1rem" : "0rem")};
//   border: none;
//   transition: all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);

//   &:focus,
//   &::placeholder {
//     color: white;
//   }
  
// `;

// const Button = styled.button`
//   line-height: 1;
//   pointer-events: ${props => (props.searchOpen ? "auto" : "none")};
//   cursor: ${props => (props.searchOpen ? "pointer" : "none")};
//   background-color: transparent;
//   border: none;
//   outline: none;
//   color: white;
// `;
// console.log(this.props)

// function SearchBar() {

//     const [results, setResults] = useState([])
//     const [value, setValue] = useState("");
//     const [searchOpen, setSearchOpen] = useState(false);
//     const formRef = useRef();
//     const inputFocus = useRef();

//     useLayoutEffect(() => {
//         // add when mounted
//         document.addEventListener("mousedown", mouseClick);
//         // cleanup event when unmounted
//         return () => {
//           document.removeEventListener("mousedown", mouseClick);
//         };
//       }, []);
      
//     useEffect(() => {

//     })
//     console.log(this.requestSearched())
      
//     const mouseClick = (e) => {
//         if (formRef.current.contains(e.target)) {
//           return;
//         }
//         setSearchOpen(false);
//     };
    
//     const onSubmit = (e) => {
//         e.preventDefault();
//         setValue(e)
//         setSearchOpen(false);
//     }

//     const onClick = () => {
//       setSearchOpen(true); 
//       inputFocus.current.focus();
//     }
  
//     const onChange = (e) => {
//       setValue(e.target.value);
//     }
//     return (
//         <div>
//             <Form
//                 searchOpen={searchOpen}
//                 onSubmit={onSubmit}
//                 onClick={onClick}
//                 ref={formRef}
//             >    
//                 <Button
//                 type="submit"
//                 searchOpen={searchOpen}
//                 >
//                   <FontAwesomeIcon icon={faSearch} size="2x" />
//                 </Button>
//                 <Input
//                 onChange={onChange}
//                 ref={inputFocus}
//                 searchOpen={searchOpen}
//                 value={value}
//                 placeholder='Search for a movie'
//                 />
//             </Form>
//         </div>
//     );
// }



// // Credit => https://codesandbox.io/s/731r7084p0