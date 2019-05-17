// import React from 'react';
// import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
// import SearchBar from '../SearchBar/SearchBar';

// export default class Navigation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <NavbarBrand href="/">Moviemania</NavbarBrand>
                     
//             <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav className="ml-auto" navbar>
//                 <NavItem>
//                   <NavLink href="/components/">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                 </NavItem>
//             </Nav>
//             </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/"><NavbarBrand>Movimania</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/popular"><NavLink>Popular</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link to="/topRated"><NavLink>Top Rated</NavLink></Link>
                </NavItem>
                <NavItem>
                  <NavLink Link to="/">Another Link</NavLink>
                </NavItem>
              </Nav>     
          </Collapse>
        </Navbar>
      </div>
    );
  }
}