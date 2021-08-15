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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const About = () => (
  <>
    <div>
      <MyApp Component={TopNav} />

      <div className={stylesAbout.aboutBanner}>
        <Image
          className={stylesAbout.searchImg}
          src="img/about-us-banner.jpg"
          alt="First slide"
        />
      </div>
      <div className={stylesAbout.aboutContent}>
        <Container fluid>
          <Row>
            <Col lg="7">
              <div className={stylesAbout.aboutContentLeftCol}>
                <h2>Salt Lake AE Block 2021</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, <br></br>
                  <br></br>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,{" "}
                </p>
              </div>
            </Col>
            <Col lg="5">
              <div className={stylesAbout.aboutContentVideo}>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row className={stylesAbout.peapleAlsoViewedWrap}>
          <Col>
            <span className={stylesAbout.peapleAlsoViewedText}>People also Viewed</span>
          </Col>
            <Col lg="12">
              <div className={stylesAbout.videoListWrap}>
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  keyBoardControl={true}
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className={stylesAbout.videoList}>
                    <h3>Salt Lake AE Block 2021</h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/ZlD43aZiEa0?controls=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Carousel>
              </div>
            </Col>
           
          </Row>
        </Container>
      </div>
      <MyApp Component={Footer} />
    </div>
  </>
);

export default About;
