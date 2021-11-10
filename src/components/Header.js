import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Button, Navbar, Container, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap';
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


function Header() {
    const { state: { cart },dispatch, productDispatch,} = CartState();

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
                                <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </Nav>
                </Navbar.Text>


            </Container>
        </Navbar>
    )
}

export default Header
