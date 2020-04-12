import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect   >
                <Navbar.Brand href="#home">Soleyman Shahir</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href='#youtube'> Youtube </Nav.Link>
                        <Nav.Link href='#youtube'> Insta </Nav.Link>
                        <Nav.Link href='#youtube'> Twitter </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
