import Link from "next/link";
import { Container, Row, Col, Navbar, Nav  } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
export default function TopNav() {
  return (
    <>

<Navbar collapseOnSelect expand="lg" fixed="top" className={stylesHome.mainnavWrap}>
  <Container>
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav" className={stylesHome.navWrap}>
    <Nav className="justify-content-center" >
      <Nav.Link href="/" className={stylesHome.navlist}>Home</Nav.Link>
      <Nav.Link href="/about" className={stylesHome.navlist}>Tours</Nav.Link>
      <Nav.Link href="/puja" className={stylesHome.navlist}>About</Nav.Link>
      <Nav.Link href="/contact" className={stylesHome.navlist}>Blogs</Nav.Link>
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