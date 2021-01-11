// import { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from  "reactstrap";

function NavBar() {
    return <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Google Book Search</NavbarBrand>
            <Nav>
                <NavLink href="/">Search</NavLink>
                <NavLink href="/saved">Saved</NavLink>
            </Nav>
    </Navbar>
};

export default NavBar;