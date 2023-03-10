import {useState,useEffect} from "react"
import {Navbar,Nav, Container} from "react-bootstrap";

//import navicon2 from "../assets/img/navIcon2 copy.png"
//import navicon3 from "../assets/img/navIcon3 copy.png"
//import navicon1 from "../assets/img/navIcon1 copy.png"




export const NavBar = () => {
     const [ activeLink, setActiveLink] = useState("home");
     const [scrolled,setScrolled] = useState("false");

     useEffect(() => {
        const onScroll = () => {
      if(window.scrollr>50) {
         setScrolled(true);

      }else{
        setScrolled(false)
      }                                                                                                     
     }

     window.addEventListener("scroll",onScroll);
    
     return () => window.removeEventListener("scroll",onScroll);

    
      }, []);
      
     const onUpdateActiveLink =(value) => {
        setActiveLink(value);
     }
   
    return(
        <Navbar  expand="md" className={scrolled ? "scrolled" : ""}>
        <Container >
        <Navbar.Brand >
           <h1>LOGO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span classname="navbar-toggeler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ?'active navbar-link':'navbar-link'} onclick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#skills"className={activeLink === 'skills' ?'active navbar-link':'navbar-link'}onclick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        <Nav.Link href="#projects"className={activeLink === 'project' ?'active navbar-link':'navbar-link'}onclick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
    
        
        <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={'/img/navIcon1 copy.png'} alt=""/></a>
                <a href="#"><img src={'/img/navIcon2 copy.png'} alt=""/></a>
                <a href="#"><img src={'/img/navIcon3 copy.png'} alt=""/></a>
                
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
