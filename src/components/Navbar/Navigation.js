import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

export default class Navigation extends Component {
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
        <Navbar color light expand="md">
          <NavbarBrand href="/">Blockbuster</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Latest</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Popular</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Top Rated</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Upcoming</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}