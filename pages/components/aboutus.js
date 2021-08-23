import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className={stylesHome.aboutContainer}>
        <Container fluid>
          <Row className={stylesHome.aboutBox}>
          <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.aboutImg}>
                <img
                  className={stylesHome.pujaListImg}
                  src="img/img-1.jpg"
                  alt="First slide"
                  fluid
                />
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.aboutInfo}>
                <h2>ABOUT US</h2>
                <p>
                We are standing in an era where immersive technologies are going to take the reality of digital interaction a step further and provide unparalleled experiences.
                <br></br> <br></br>
                MaaDurgaVR is an initiative by SpaceShift to showcase the grandiose of Durga Puja in an immersive way from the comfort of your home. We aim to create quality digital content that provides virtual interactions and brings the viewers closer to the real experience.
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
