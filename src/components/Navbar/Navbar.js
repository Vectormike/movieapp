import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse, 
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navbar extends Component {
    constructor() {
        super();

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
            <Navbar>
                <NavbarBrand>Blockbuster</NavbarBrand>
                <NavbarToggle onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>Trending</NavLink>
                            <NavLink>New</NavLink>
                            <NavLink>Most Watched</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
      )
    }
}