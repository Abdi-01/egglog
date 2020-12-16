import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

export default (props) => {

    const [collapse, setCollapse] = useState(false)

    return (
        <div>
            <Navbar light>
                <NavbarBrand className="mr-auto">
                    <Link to="/" style={{ textDecoration: 'none', color:'#2c3e50', fontWeight:'bolder' }}>
                        EGGLAB DATA.log
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={() => setCollapse(!collapse)} className="mr-2" />
                <Collapse isOpen={collapse} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/product" style={{ textDecoration: 'none' }} className="text-white">
                                Manage Products
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}