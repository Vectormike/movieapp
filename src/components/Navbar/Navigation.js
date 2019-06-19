
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
      <div className="">
        <Navbar style={
          {
            color: '#8E8D8F'
          }
        }  expand="md">
          <NavLink style={
            {
              textDecoration: 'none',
              color: 'white'
            }
          } to="/">Movimania</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav style={
            {
              padding: '5px',
              margin: '5px'
            }
          } className="tracked ml-auto" navbar>
            <NavItem>
              <NavLink style={
              {
                textDecoration: 'none',
                color: 'white'
              }
            } 
            to="/popular">Popular</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={
                {
                  textDecoration: 'none',
                  padding: '30px',
                  color: 'white'
                }
              }   
            to="/topRated">Top Rated</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={
                  {
                    textDecoration: 'none',
                    color: 'white'
                  }
                }
              to="/latest">Latest</NavLink>
            </NavItem>
          </Nav>     
          </Collapse>
        </Navbar>
      </div>
    );
  }
}