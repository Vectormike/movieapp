
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
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
          <NavbarBrand>Movimania</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/popular">Popular</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/topRated">Top Rated</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/latest">Latest</NavLink>
                </NavItem>
              </Nav>     
          </Collapse>
        </Navbar>
      </div>
    );
  }
}