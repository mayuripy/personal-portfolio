import {NavBar, NavDropdown } from "react-bootstrap"

export const NavBar = () => {
    return(
        <NavBar  expand="lg">
        <Container >
        <NavBar.Brand href="#home">
            <img src={""} alt="Logo" />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" >
            <span classname="navbar-toggeler-icon"></span>
        </NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
    
    
        </Nav>
        <span className="navbar-text">
            <div className="navbar-icon">
                <a href="#"><img src{} alt=""/></a>
            </div>
        </span>
        </NavBar.Collapse>
        </Container>
        </NavBar>
    )
}
