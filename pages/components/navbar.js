import Link from "next/link";
import { Container, Row, Col, Navbar, Nav, NavDropdown   } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
export default function TopNav() {
  return (
    <>

<Navbar collapseOnSelect expand="lg" fixed="top" className={stylesHome.mainnavWrap}>
  <Container>
 <Navbar.Brand href="#home" className={stylesHome.navBrand}>  
        <img
          className={stylesHome.logoSmall}
          src="img/logo-small.png"
          alt="First slide"
        /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav" className={stylesHome.navWrap}>
    <Nav className="justify-content-center" >
      <Nav.Link href="/" className={stylesHome.navlist}>Home</Nav.Link>
      {/* <Nav.Link href="/tours" className={stylesHome.navlist}>Tours</Nav.Link> */}
      <NavDropdown title="Tours" id="basic-nav-dropdown" className={stylesHome.navlist}>
          {/* <NavDropdown.Item  href="/tours">Tours</NavDropdown.Item> */}
          <NavDropdown.Item href="#action/3.2">2021</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">2020</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">2019</NavDropdown.Item>
          
        </NavDropdown>
      {/* <Nav.Link href="/about" className={stylesHome.navlist}>About</Nav.Link> */}
      <NavDropdown title="About" id="basic-nav-dropdown" className={stylesHome.navlist}>
          <NavDropdown.Item  href="/about">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">About Durga</NavDropdown.Item>
         
          
        </NavDropdown>
      <Nav.Link href="/blog" className={stylesHome.navlist}>Blogs</Nav.Link>
      <Nav.Link href="/contact" className={stylesHome.navlist}>Contacts</Nav.Link>
      <Nav.Link href="/share" className={stylesHome.navlistShare}>Share</Nav.Link>
      
    
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

    {/* <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/puja">About Durga Puja</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/share">Share</Link>
    </nav>
     */}
    </>
    
  )
}