import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

export default function PujaList({pujalist, year, search}) {
  const [items, setItems] = useState(pujalist);
  let [count, setCount] = useState(0);
  const [currentYear, setCurrentYear] = useState(year);
  const [shareUrl, setShareUrl] = useState();
  const title = 'Durga Puja 2020'
  useEffect(() => {
    const host = window.location.href;
    setShareUrl(`${host}`);
  }, [shareUrl]);
  useEffect(async ()=>{
    if(currentYear!=year){
      let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data?year="+year);
      let data = await res.json();
      setItems(data.items);
      setCurrentYear(year);
    }
  });
  return (
    <>
      <div className={stylesHome.pujaListContainer}>
        <Container fluid>
          <Row>
            <Col lg="12">
            </Col>        
        {items
          ?.filter(e=>e.homeTitle.match(search?.toUpperCase()))
          ?.sort((a, b) => a.sequence - b.sequence)
          ?.map((item, index) => (
            <Col xs={12} lg={6}>
              <div className={stylesHome.pujaListBox}>
                <h3>{item.homeTitle}</h3>
                <Link
                  href={item.clubPageName}
                >
                <img
                  className={stylesHome.pujaListImg}
                  src={item.homeImg}
                  alt="First slide"
                  fluid
                />
                </Link>
                <div hidden>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */
                }
                </div>

                <a className={stylesHome.shareBt}
                 className={stylesHome["shareBt"] + " " + ["shareBtNew"]}
                >
                  <NavDropdown title={<img src="img/share-icon.png" alt="First slide" fluid />} id="basic-nav-dropdown" className={"shareBt"}>
                  <LinkedinShareButton
                            url={shareUrl+item.clubPageName}
                            quote={title}
                            className="Demo__some-network__share-button"
                          >
                  <NavDropdown.Item  href="#!"> <img src="img/001-linkedin.png" alt="First slide" title="Linkedin" fluid /></NavDropdown.Item>
                  </LinkedinShareButton>
                  <TwitterShareButton
                            url={shareUrl+item.clubPageName}
                            quote={title}
                          >
                  <NavDropdown.Item  href="#!"> <img src="img/002-twitter.png" alt="First slide" title="Twitter" fluid /></NavDropdown.Item>
                  </TwitterShareButton>
                  <FacebookShareButton
                            url={shareUrl+item.clubPageName}
                            quote={title}
                            className="Demo__some-network__share-button"
                          >
                  <NavDropdown.Item  href="#!"> <img src="img/003-facebook.png" alt="First slide" title="Facebook" fluid /></NavDropdown.Item>
                  </FacebookShareButton>
                  <WhatsappShareButton
                            url={shareUrl+item.clubPageName}
                            quote={title}
                            className="Demo__some-network__share-button"
                          >
                  <NavDropdown.Item  href="#!"> <img src="img/004-whatsapp.png" alt="First slide" title="Whatsapp" fluid /></NavDropdown.Item>
                  </WhatsappShareButton>
                  <NavDropdown.Item  href="#!"> <img src="img/link.png" alt="First slide" title="Copy Link" fluid /></NavDropdown.Item>
                  
                
                  
                </NavDropdown>

                </a>
              </div>
            </Col>
          ))}
          </Row>
          </Container>
      </div>
    </>
  );
}
