import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown   } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
export default function TopNav() {
  const [years, setYears] = useState([]);
  useEffect(async ()=>{
    if(years.length==0){
      let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-distinct-years");
      let data = await res.json();
      setYears(data.years);
      }
  })
  return (
    <>

<Navbar collapseOnSelect expand="lg" fixed="top" className={stylesHome.mainnavWrap}>
  <Container>
 <Navbar.Brand href="/" className={stylesHome.navBrand}>  
        <img
          className={stylesHome.logoSmall}
          src="../img/logo-small.png"
          alt="First slide"
        /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
  <Navbar.Collapse id="responsive-navbar-nav" className={stylesHome.navWrap}>
    <Nav className="justify-content-end" >
      <Nav.Link href="/" className={stylesHome.navlist}>Home</Nav.Link>
      {/* <Nav.Link href="/tours" className={stylesHome.navlist}>Tours</Nav.Link> */}
      <NavDropdown title="Showcase" id="basic-nav-dropdown" className={stylesHome.navlist}>
          {/* <NavDropdown.Item  href="/tours">Tours</NavDropdown.Item> */}
          {/* <NavDropdown.Item href="#action/3.2">2021</NavDropdown.Item> */}
          {years.map((item)=>(
            <NavDropdown.Item href="#action/3.3">{item}</NavDropdown.Item>
          ))}
          {/* <NavDropdown.Item href="#action/3.3">2019</NavDropdown.Item> */}
          
        </NavDropdown>
      {/* <Nav.Link href="/about" className={stylesHome.navlist}>About</Nav.Link> */}
      <NavDropdown title="About" id="basic-nav-dropdown" className={stylesHome.navlist}>
          <NavDropdown.Item  href="/about">About Us</NavDropdown.Item>
          <NavDropdown.Item href="/aboutpujo">About Durga Puja</NavDropdown.Item>
         
          
        </NavDropdown>
      <Nav.Link href="/blogs" className={stylesHome.navlist}>Blog</Nav.Link>
      <Nav.Link href="/contact" className={stylesHome.navlist}>Contact</Nav.Link>
      <Nav.Link href="/share" id="myTable" className={stylesHome.navlistShare}>Share</Nav.Link>
      
    
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