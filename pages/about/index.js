import Head from "next/head";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesAbout from "../../styles/about.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const About = () => (
  <>
    <div>
      <MyApp Component={TopNav} />

      <div className={stylesAbout.aboutBanner}>
        <img
          className={stylesAbout.searchImg}
          src="img/about-us-banner-new.jpg"
          alt="First slide"
        />
      </div>
      <div className={stylesAbout.aboutContent}>
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className={stylesAbout.aboutTitleWrap}>
                <h2>About MaaDurgaVR</h2>
                <p>
                  We are standing in an era where immersive technologies are
                  going to take the reality of digital interaction a step
                  further and provide unparalleled experiences.
                </p>
              </div>
            </Col>
            <Row className={stylesAbout.aboutContentContainer}>
              <Col lg="6">
                <div className={stylesAbout.aboutContentImgWRap}>
                  <img
                    className={stylesAbout.aboutContentImg}
                    src="img/about-img1.jpg"
                    alt="First slide"
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className={stylesAbout.aboutContentLeftCol}>
                  <h2>Salt Lake AE Block 2021</h2>
                  <p>
                    MaaDurgaVR is an initiative by SpaceShift to showcase the
                    grandiose of Durga Puja in an immersive way from the comfort
                    of your home. We aim to create quality digital content that
                    provides virtual interactions and brings the viewers closer
                    to the real experience.<br></br>
                    <br></br>
                    At MaaDurgaVR we bring forward the significance of creating
                    digital twins of Durga Puja Pandal installations and also
                    making short films, as we understand the importance of
                    restoring the culture, heritage, and art in a digital
                    format. With the accessibility of VR on web platforms and
                    the ubiquity of mobile devices, we can elevate the festival
                    a step further, by reaching out to a wider audience and
                    enabling them with an experience like never before.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className={stylesAbout.aboutContentContainer}>
              <Col lg="6">
                <div className={stylesAbout.aboutContentLeftCol}>
                  <h2>Salt Lake AE Block 2021</h2>
                  <p>
                    MaaDurgaVR focuses on going beyond traditional storytelling
                    to help expand the exposure the Kolkata Durga Puja Pandals
                    receive. However, the COVID pandemic compromised the
                    excitement and experience of the ten-day Durga Puja for
                    enthusiasts. It is our priority to maintain and preserve the
                    thrill and nostalgia associated with the event. Hence,
                    MaaDurgaVR uses Virtual Reality technology to bring you the
                    charm of the Durga Puja Theme Pandals and Bonidi Pujas
                    ensuring that you stay home without missing the excitement
                    of pandal hopping.
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className={stylesAbout.aboutContentImgWRap}>
                  <img
                    className={stylesAbout.aboutContentImg}
                    src="img/about-img2.jpg"
                    alt="First slide"
                  />
                </div>
              </Col>
            </Row>

            <Row className={stylesAbout.aboutContentContainer}>
              <Col lg="6">
                <div className={stylesAbout.aboutContentImgWRap}>
                  <img
                    className={stylesAbout.aboutContentImg}
                    src="img/about-3.jpg"
                    alt="First slide"
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className={stylesAbout.aboutContentLeftCol}>
                  <h2>Salt Lake AE Block 2021</h2>
                  <p>
                    Traditionally, pandal hopping means bearing the heat and
                    claustrophobia of the crowd. It also entails hours of
                    traveling and walking on foot. And, we cannot forget the
                    possibility of transmission during COVID. 360 Virtual tours
                    eradicate these difficulties and are capable of amassing a
                    wider audience due to their accessibility across several
                    devices. Virtual Reality enables you to experience the
                    divinity of the rituals and share them with your loved ones.
                    <br></br>
                    <br></br>
                    Virtual walkthroughs are shareable on major social media
                    platforms, which helps them reach a global audience. These
                    360 virtual tours are supported across a wide range of
                    devices and are easily accessible. This helps the
                    magnificent Durga Puja Theme Pandals get more exposure and
                    allows people worldwide to relish the experience. Moreover,
                    Virtual tours help showcase and promote the richness of our
                    culture, traditions, and heritage on a global platform.
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <MyApp Component={Footer} />
    </div>
  </>
);

export default About;
