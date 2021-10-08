import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown   } from "react-bootstrap";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import stylesHome from "../../styles/Home.module.css";
export default function TopNav({ setYear }) {
  const [years, setYears] = useState([]);
  const [shareUrl, setShareUrl] = useState();
  const title = 'Durga Puja 2020'
  useEffect(() => {
    const host = window.location.href;
    setShareUrl(`${host}`);
  }, [shareUrl]);
  useEffect(async ()=>{
    if(years.length==0){
      let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-distinct-years");
      let data = await res.json();
      setYears(data.years);
      }
  });
  const navigate = (value) => {
    setYear(value);
  }
  return (
    <>

<Navbar collapseOnSelect expand="lg" fixed="top" className={stylesHome.mainnavWrap}>
  <Container>
 <Navbar.Brand href="/" className={stylesHome.navBrand}>  
        <img
          className={stylesHome.logoSmall}
          src="../img/logo.png"
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
            <NavDropdown.Item value={item} onClick={e=>navigate(e.target.innerText)}>{item}</NavDropdown.Item>
          ))}
          {/* <NavDropdown.Item href="#action/3.3">2019</NavDropdown.Item> */}
          
        </NavDropdown>
      {/* <Nav.Link href="/about" className={stylesHome.navlist}>About</Nav.Link> */}
      <NavDropdown title="About" id="basic-nav-dropdown" className={stylesHome.navlist}>
          <NavDropdown.Item  href="/durga-puja-virtual-showcase-platform">About Us</NavDropdown.Item>
          <NavDropdown.Item href="/about-durga-puja-festival">About Durga Puja</NavDropdown.Item>
         
          
        </NavDropdown>
      <Nav.Link href="/blogs" className={stylesHome.navlist}>Blog</Nav.Link>
      <Nav.Link href="/get-in-touch" className={stylesHome.navlist}>Contact</Nav.Link>

      <NavDropdown title="Share" id="basic-nav-dropdown" className={stylesHome["navlistShare"]+ " " + "shareBt"}>
          <LinkedinShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
          <NavDropdown.Item  href="#!"> <img src="img/001-linkedin.png" alt="First slide" title="Linkedin" fluid /></NavDropdown.Item>
          </LinkedinShareButton>
          <TwitterShareButton
                    url={shareUrl}
                    quote={title}
                  >
          <NavDropdown.Item  href="#!"> <img src="img/002-twitter.png" alt="First slide" title="Twitter" fluid /></NavDropdown.Item>
          </TwitterShareButton>
          <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
          <NavDropdown.Item  href="#!"> <img src="img/003-facebook.png" alt="First slide" title="Facebook" fluid /></NavDropdown.Item>
          </FacebookShareButton>
          <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
          <NavDropdown.Item  href="#!"> <img src="img/004-whatsapp.png" alt="First slide" title="Whatsapp" fluid /></NavDropdown.Item>
          </WhatsappShareButton>
          <NavDropdown.Item  href="#!"> <img src="img/link.png" alt="First slide" title="Copy Link" fluid /></NavDropdown.Item>
          
         
          
        </NavDropdown>

      {/* <Nav.Link href="/share" id="myTable" className={stylesHome.navlistShare}>Share</Nav.Link> */}
      
    
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