import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";


function Header() {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>hour Shopping</a>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        type="search"
                        placeholder="Search a product..."
                        className="m-auto"
                        aria-label="Search"
                    />
                    <Nav>
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge>{5}</Badge>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </Nav>
                </Navbar.Text>


            </Container>
        </Navbar>
    )
}

export default Header
