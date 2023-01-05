import {usestate,useEffect} from "react"
import {NavBar, Container } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"



export const NavBar = () => {
     const { activeLink, setactiveLink} = usestate("home");
     const {scrolled,setscolled} = usestate("false");

     useEffect(() => {
     if(window.scrollr>50) {
        setscrolled(true);

     }else{
        setscrolled(false)
     }
     }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll)

    
     }, []);
     const onupdatActiveLink = () => {
        setActiveLink(value);
     }
   
    return
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
        <Nav.Link href="#home" className={activeLink === 'home' ?'active navbar-link':'navbar-link'} onclick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#skills"className={activeLink === 'skills' ?'active navbar-link':'navbar-link'}onclick={() => onUpdateActiveLink('slills')}>Skills</Nav.Link>
        <Nav.Link href="#projects"className={activeLink === 'project' ?'active navbar-link':'navbar-link'}onclick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
    
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src{} alt=""/></a>
                <a href="#"><img src{} alt=""/></a>
                <a href="#"><img src{} alt=""/></a>
                <a href="#"><img src{} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
        </NavBar.Collapse>
        </Container>
        </NavBar>
    )
}