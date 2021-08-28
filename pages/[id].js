import { withRouter } from "next/router";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesTours from "../styles/tours.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopNav from "./components/navbar";
import MyApp from "./_app";
import Footer from "./components/footer";
import { useState } from "react";

export const getStaticPaths = async () => {
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    const paths = data.items.map((e, i) => {
        return {
            params: { id: e.clubPageName.toString() }
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
    let item = data.items.filter(o=>o.clubPageName == id)[0];
    return {
        props: {item: JSON.stringify(item), items: JSON.stringify(data.items)}
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

function tour({item, items}) {
    const [play, setPlay] = useState(false);
    let profile = JSON.parse(item);
    let youTubeLink = profile.youtubeLink? /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.exec(profile.youtubeLink)[0]:'';
    const playTour = () => {
      setPlay(true);
    };
    const stopTour = () => {
      setPlay(false);
    };
    return (
        <>
          <div>
            
            {play && (
            <>
            <div style={{position:'absolute',fontSize: '3rem', color: '#ddd', cursor: 'pointer', right: '5rem', top: '2rem', width:'2rem', height:'2rem'}} onClick={stopTour}>
            <img
              style={{width:'100%'}}
              src="../img/x-mark.png"
              alt="First slide"
            />
            </div>            <iframe
              width="100%"
              style={{height: "100vh"}}
              src={profile.heroS3}
              title="YouTube video player"
              frameBorder="0"
              seamless
              sandbox
            ></iframe>
            </>
            )}
            {!play && (
            <>
            <MyApp Component={TopNav} />
    
            <div className={stylesTours.aboutBanner}>
              <img
                className={stylesTours.searchImg}
                src={profile.heroDesktopImg}
                alt="First slide"
              />
              <button className={stylesTours.playBt} onClick={playTour}>
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
              <button className={stylesTours.playBt} onClick={playTour}>
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
                      <h2>{profile.themeHeader}</h2>
                      <p>
                        {profile.themeDesc.replace("\n", "\\n")}
                        <br />
                        <br />
                        {profile.themeDesc2.replace("\n", "\\n")}
                      </p>
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className={stylesTours.aboutContentVideo}>
                      <iframe
                        width="100%"
                        height="400"
                        src={youTubeLink.replace('"','')}
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
                        {JSON.parse(items)
                            .sort(function() { return Math.random() - 0.5; })
                            .map((item, index) => (
                          
                        <a className={stylesTours.videoList}>
                          <h3>{item.homeTitle}</h3>
                          <a href={''+item.clubPageName}>
                          <img
                            className={stylesTours.searchImg}
                            src={item.homeImg}
                            alt="First slide"
                          />
                          </a>
                        </a>
                        ))}
    
                        </Carousel>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <MyApp Component={Footer} />
            </>
            )}
          </div>
        </>
      );
}

export default withRouter(tour)
