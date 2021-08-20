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
                <img
                 
                  src="img/icon-5.png"
                  alt="First slide"
                  fluid
                />

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
