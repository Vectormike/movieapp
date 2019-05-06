import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <SearchBar href="/" className="ml-auto"/>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <span className="discover">Discover</span>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Latest</NavLink>
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
            <Nav navbar>
                <span className="genres">Genres</span>
                <NavItem>
                    <NavLink>Action</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Adventure</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Animation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Comedy</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Crime</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Documentary</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Drama</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Family</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Fantasy</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>History</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Horror</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Music</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Mystery</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Romance</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Science Fiction</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>TV Movie</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Thriller</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>War</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Western</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}