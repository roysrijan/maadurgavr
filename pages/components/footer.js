import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className={stylesHome.footer}>
        <Container>
          <Row>
            <Col xs lg="6">
              <div className={stylesHome.footerLogoWrap}>
                <img src="../img/logo.png " alt="First slide" fluid />
              </div>
              <div className={stylesHome.newsletterWrap}>
                <h2>Be the first to see the latest content</h2>
                <div className={stylesHome.newsletterBox}>
                  <div className={stylesHome.newsletter}>
                    <Form>
                      <Form.Group className="" controlId="formBasicEmail">
                        <Form.Control
                          className={stylesHome.inputStyle}
                          type="email"
                          placeholder="Email"
                        />
                      </Form.Group>
                    </Form>
                    <span>By subscribing you agree to our <a href=""> Privacy Policy</a>. You can unsubscribe at any time.</span>
                  </div>
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className={stylesHome.footerLinks}>
                {/* <h3>Pages</h3> */}
               <a href="/">Home</a>
               <a href="/">About us</a>
               <a href="/">Showcase</a>
               <a href="/">BLogs</a>
               <a href="/">Contact</a>
               <a href="/">About durga puja</a>
               <a href="/">Terms & Conditions</a>
               <a href="/">Privacy Policy</a>
              
              
              
              </div>
            </Col>
            <Col xs lg="2">
              <div className={stylesHome.footerLinks}>
                <h3>Follow Us</h3>
                <div className={stylesHome.shareLinks}>
                  <a>
                   
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                    <span>Youtube</span>
                  </a>
                  <a>
                   
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                    <span>Instagram</span>
                  </a>

                  <a>
                   
                   <i class="fa fa-facebook" aria-hidden="true"></i>
                     <span>Facebook</span>
                   </a>
                  <a>
                   
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="12">
              <span className={stylesHome.footerCopyright}>
                 © maadurgavr 2021
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
