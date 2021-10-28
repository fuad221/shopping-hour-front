import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Navbar>
            <Container>
            <Navbar.Brand>
                <Link to='/'> hour Shopping</Link>
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
