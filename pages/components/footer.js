import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className={stylesHome.footer}>
        <Container fluid>
          <Row>
            <Col xs lg="4">
              <div>
                <img src="img/logo.png " alt="First slide" fluid />
              </div>
            </Col>
            <Col lg="4">
              <div className={stylesHome.footerLinks}>
                <h3>CONTACT US</h3>
                <p>+44 345 678 903</p>
                <p>infomaadurgavr@mail.com</p>
              </div>
            </Col>
            <Col xs lg="4">
            <div className={stylesHome.footerLinks}>
                <h3>Follow Us</h3>
               <div className={stylesHome.shareLinks}>
                 <a> <img src="img/yt.png " alt="First slide" fluid /></a>
                 <a> <img src="img/insta.png " alt="First slide" fluid /></a>
                 <a> <img src="img/fb.png " alt="First slide" fluid /></a>
               </div>
              </div>
            </Col>
            <Col lg="12">
<span className={stylesHome.footerCopyright}>© maadurgavr.com</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}