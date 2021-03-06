import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">First Choice Fruits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="additem">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="manageinventory">Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                </>
                            }
                            {user ?
                                <button onClick={handleSignOut}>Sign Out</button> :

                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
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