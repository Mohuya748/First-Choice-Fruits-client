import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">First Choice Fruits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {/* { user ?
                            <button onClick={handleSignOut}>Sign Out</button> :

                            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                            } */}
                            <Nav.Link as={Link} to="/manageinventories">Manage Inventories</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
        
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;