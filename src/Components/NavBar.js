import { NavDropdown } from "react-bootstrap"

export const NavBar = () => {
    return(
        <NavBar  bg="light" expand="lg">
        <Container >
        <NavBar.Brand href="#home">React-Bootstrap</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavbarDropdown.Item href="#action/3.1">Action</NavbarDropdown.Item>
        <NavbarDropdown.Item href="#action/3.2">Another action</NavbarDropdown.Item>
        <NavbarDropdown.Item href="#action/3.3">somthing</NavbarDropdown.Item>
        <NavDropdown.Divider />
        <NavbarDropdown.Item href="#action/3.4">Separate link</NavbarDropdown.Item>

        
        </NavDropdown>
        </Nav>
        </NavBar.Collapse>
        </Container>
        </NavBar>
    )
}
