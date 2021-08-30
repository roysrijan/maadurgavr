import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>

<div className={stylesHome.newsletterWrapper}>
        <Container>
          <Row>
            <Col>
              <div className={stylesHome.newsletterBoxMain}>
                <div className={stylesHome.newsletterWrap}>
                  <h2>Get notified when we post new content</h2>
                  <div className={stylesHome.newsletterBox}>
                    <div className={stylesHome.newsletter}>
                      <Form>
                        <Form.Group className="" controlId="formBasicEmail">
                          <Form.Control
                            className={stylesHome.inputStyle}
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Form>
                      <span>
                        By subscribing you agree to our{" "}
                        <a href=""> Privacy Policy</a>. You can unsubscribe at
                        any time.
                      </span>
                    </div>
                    <Button variant="primary" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      


      <div className={stylesHome.aboutContainer}>
        <Container fluid>
          <Row className={stylesHome.aboutBox}>
          <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.aboutImg}>
                <img
                  className={stylesHome.pujaListImg}
                  src="img/logo_Spaceshift.png"
                  alt="First slide"
                  fluid
                />
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.aboutInfo}>
                <h2>About us</h2>
                <p>
                We are standing in an era where immersive technologies are going to take the reality of digital interaction a step further and provide unparalleled experiences.
                <br></br> <br></br>
                DurgaPujaVR is an initiative by SpaceShift to showcase the grandiose of Durga Puja in an immersive way from the comfort of your home. We aim to create quality digital content that provides virtual interactions and brings the viewers closer to the real experience.
                </p>

                <a className={stylesHome.knowmoreBt}>Know more</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
