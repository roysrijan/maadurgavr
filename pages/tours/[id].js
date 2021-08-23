import { withRouter } from "next/router";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesTours from "../../styles/tours.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";

export const getStaticPaths = async () => {
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    const paths = data.items.map((e, i) => {
        return {
            params: { id: e.sequence? e.sequence.toString(): '1' }
        }
    });
    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    console.log(data.items[id]);
    return {
        props: {item: JSON.stringify(data.items[id])}
    }
}

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

function tour({item}) {
    let profile = JSON.parse(item);
    let youTubeLink = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.exec(profile.youtubeLink)[0];
    return (
        <>
          <div>
            <MyApp Component={TopNav} />
    
            <div className={stylesTours.aboutBanner}>
              <img
                className={stylesTours.searchImg}
                src={profile.heroDesktopImg}
                alt="First slide"
              />
              <button className={stylesTours.playBt}>
                <img
                  className={stylesTours.playIcon}
                  src="../img/play-button.png"
                  alt="First slide"
                />
                <h2>View in 360</h2>
              </button>
            </div>
    
            <div className={stylesTours.aboutBannerForMobile}>
              <img
                className={stylesTours.searchImg}
                src={profile.heroMobileImg}
                alt="First slide"
              />
              <button className={stylesTours.playBt}>
                <img
                  className={stylesTours.playIcon}
                  src="../img/play-button.png"
                  alt="First slide"
                />
                <h2>View in 360</h2>
              </button>
            </div>
            <div className={stylesTours.aboutContent}>
              <Container fluid>
                <Row>
                  <Col lg="12">
                    <div className={stylesTours.aboutContentLeftCol}>
                      <h2>{profile.heroHeader}</h2>
                      <p>
                        {profile.clubMetaDesc}
                      </p>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className={stylesTours.aboutContentVideo}>
                      <iframe
                        width="100%"
                        height="400"
                        src={youTubeLink}
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
                        partialVisbile={true}
                      >
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TBNL_01.png"
                            alt="First slide"
                          />
                        </a>
    
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TBNL_02.png"
                            alt="First slide"
                          />
                        </a>
    
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TMBNL_03.png"
                            alt="First slide"
                          />
                        </a>
    
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TMBNL_04.png"
                            alt="First slide"
                          />
                        </a>
    
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TMBNL_05.png"
                            alt="First slide"
                          />
                        </a>
    
                        <a className={stylesTours.videoList}>
                          <h3>Salt Lake AE Block 2021</h3>
                          <img
                            className={stylesTours.searchImg}
                            src="../img/thumb/TMBNL_06.png"
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

export default withRouter(tour)
