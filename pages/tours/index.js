import Head from "next/head";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesTours from "../../styles/tours.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
export default function index() {
  return (
    <>
      <div>
        <MyApp Component={TopNav} />

        <div className={stylesTours.aboutBanner}>
          <Image
            className={stylesTours.searchImg}
            src="img/about-us-banner.jpg"
            alt="First slide"
          />
          <button className={stylesTours.playBt}>
            <Image
              className={stylesTours.playIcon}
              src="img/play-button.png"
              alt="First slide"
            />
            <h2>View in 360</h2>
          </button>
        </div>
        <div className={stylesTours.aboutContent}>
          <Container fluid>
            <Row>
              <Col lg="7">
                <div className={stylesTours.aboutContentLeftCol}>
                  <h2>Salt Lake AE Block 2021</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, <br></br>
                    <br></br>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`&apos;`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,{" "}
                  </p>
                </div>
              </Col>
              <Col lg="5">
                <div className={stylesTours.aboutContentVideo}>
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
            <Row className={stylesTours.peapleAlsoViewedWrap}>
              <Col>
                <span className={stylesTours.peapleAlsoViewedText}>
                  People also Viewed
                </span>
              </Col>
              <Col lg="12">
                <div className={stylesTours.videoListWrap}>
                  <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    itemClass="carousel-item-padding-40-px"
                  >
                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TBNL_01.png"
                        alt="First slide"
                      />
                    </a>

                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TBNL_02.png"
                        alt="First slide"
                      />
                    </a>

                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TMBNL_03.png"
                        alt="First slide"
                      />
                    </a>

                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TMBNL_04.png"
                        alt="First slide"
                      />
                    </a>

                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TMBNL_05.png"
                        alt="First slide"
                      />
                    </a>

                    <a className={stylesTours.videoList}>
                      <h3>Salt Lake AE Block 2021</h3>
                      <Image
                        className={stylesTours.searchImg}
                        src="img/thumb/TMBNL_06.png"
                        alt="First slide"
                      />
                    </a>
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
}
