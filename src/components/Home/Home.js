import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Home extends Component {  
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink to="/popular" active>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/new">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Home;