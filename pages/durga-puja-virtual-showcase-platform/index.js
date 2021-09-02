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
    <Head>
      <title>About DurgaPujaVR</title>
      <meta property="og:description" content="DurgaPujaVR is an initiative by SpaceShift to showcase the grandiose of Durga Puja online in an immersive way from the comfort of your home. We aim to create quality digital content that provides virtual interactions and brings the viewers closer to the real experience." />
    </Head>
    <div className={stylesAbout.bodyContent}>
      <MyApp Component={TopNav} />

      <div className={stylesAbout.aboutBanner}>
        <img
          className={stylesAbout.searchImg}
          src="img/durgapujavr-virtual-tours.webp"
          alt="First slide"
        />
      </div>
      <div className={stylesAbout.aboutBannerForMobile}>
                <img
                  className={stylesAbout.searchImg}
                  src="img/durga-v.png"
                  alt="First slide"
                />
           
              </div>

      <div className={stylesAbout.aboutContent}>
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className={stylesAbout["aboutTitleWrap"] + " " + stylesAbout["aboutTitleWrapFOrMob"]}>
                <h2>About DurgaPujaVR</h2>

              </div>
            </Col>
          </Row>

          <Row className={stylesAbout.aboutContentContainer}>
            <Col lg="6" md="6">
              <div className={stylesAbout.aboutContentImgWRap}>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/durga-puja-virtual-visit.webp"
                  alt="First slide"
                />
              </div>
             

            </Col>
            <Col lg="6" md="6">
              <div className={stylesAbout.aboutContentLeftCol}>
                {/* <h2>Salt Lake AE Block 2021</h2> */}
                <p>
                  We are standing in an era where immersive technologies are
                  going to take the reality of digital interaction a step
                  further and provide unparalleled experiences.

                  DurgaPujaVR is an initiative by SpaceShift to showcase the
                  grandiose of Durga Puja in an immersive way from the comfort
                  of your home. We aim to create quality digital content that
                  provides virtual interactions and brings the viewers closer to
                  the real experience.<br></br>
                  <br></br>
                  At DurgaPujaVR we bring forward the significance of creating
                  digital twins of Durga Puja Pandal installations and also
                  making short films, as we understand the importance of
                  restoring the culture, heritage, and art in a digital format.
                  With the accessibility of VR on web platforms and the ubiquity
                  of mobile devices, we can elevate the festival a step further,
                  by reaching out to a wider audience and enabling them with an
                  experience like never before.
                </p>
              </div>
            </Col>
          </Row>

          <div className={stylesAbout.aboutContentContainerForRight}>
            <Row className={stylesAbout.aboutContentContainer}>
              <Col lg="6" md="6">
                <div className={stylesAbout.aboutContentLeftCol}>
                  {/* <h2>Salt Lake AE Block 2021</h2> */}
                  <p>
                    DurgaPujaVR focuses on going beyond traditional storytelling
                    to help expand the exposure the Kolkata Durga Puja Pandals
                    receive. However, the COVID pandemic compromised the
                    excitement and experience of the ten-day Durga Puja for
                    enthusiasts. It is our priority to maintain and preserve the
                    thrill and nostalgia associated with the event. Hence,
                    DurgaPujaVR uses Virtual Reality technology to bring you the
                    charm of the Durga Puja Theme Pandals and Bonidi Pujas
                    ensuring that you stay home without missing the excitement
                    of pandal hopping.
                  </p>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className={stylesAbout.aboutContentImgWRapr}>
                  <img
                    className={stylesAbout.aboutContentImg}
                    src="img/durga-puja-virtual-visit-home.webp"
                    alt="First slide"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className={stylesAbout.pandalHopping}>
        <Container fluid>
          <Row className={stylesAbout.aboutContentContainerNew}>
            <Col lg="12">
              <div className={stylesAbout.aboutContentContainerTitle}>
                <h2>The futuristic way of pandal hopping</h2>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={stylesAbout.aboutContentImgWRap}>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/futuristic-way-of-pandal-hopping.webp"
                  alt="First slide"
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={stylesAbout.aboutContentLeftCol}>
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
                  platforms, which helps them reach a global audience. These 360
                  virtual tours are supported across a wide range of devices and
                  are easily accessible. This helps the magnificent Durga Puja
                  Theme Pandals get more exposure and allows people worldwide to
                  relish the experience. Moreover, Virtual tours help showcase
                  and promote the richness of our culture, traditions, and
                  heritage on a global platform.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={stylesAbout.advantagesWrap}>
        <Container fluid>
          <Row>
            <Col>
              <div className={stylesAbout.advantagesTitle}>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/flower-1.png"
                  alt="First slide"
                />
                <h2>
                  Advantages virtual pandal tours have over traditional pandal
                  hopping
                </h2>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/flower-2.png"
                  alt="First slide"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Avoid Crowds</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-1.png"
                  alt="First slide"
                />
                <p>
                  Most Kolkata Durga Puja Pandals are overcrowded, which carries
                  the risk of transmission of Coronavirus. Virtual walkthroughs
                  are a great solution for people that are looking for
                  hassle-free experiences at the comfort of their homes.
                </p>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Ease of access</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-2.png"
                  alt="First slide"
                />
                <p>
                  Most senior citizens and differently-abled people miss out on
                  the pandal hopping experience. Celebrations are for everyone,
                  and DurgaPujaVR makes it possible. Now, you can join in on the
                  fun at the comfort of your home with just a few clicks.
                </p>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Easily Share Virtual Experiences</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-3.png"
                  alt="First slide"
                />
                <p>
                  DurgaPujaVR focuses on transforming storytelling and with the
                  Virtual tours of the Kolkata Durga Puja Pandals you can share
                  the visual experience.
                </p>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Bengalis Living Abroad can Experience the Beauty</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-4.png"
                  alt="First slide"
                />
                <p>
                  Bengalis living all around the world say that they miss the
                  thrill of Durga Puja. With DurgaPujaVR, they get a chance to
                  experience the festival vividly.
                </p>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Save Time When Planning Your Pandal Hopping</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-5.png"
                  alt="First slide"
                />
                <p>
                  Often, we miss out on some remarkable Puja pandals because our
                  checklist gets packed. You can check out DurgaPujaVR’s virtual
                  tours before deciding the pandals you want to see. Hence, you
                  save time and get the chance to visit the pandals you like.
                </p>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6" xs="12">
              <div className={stylesAbout.advantagesBox}>
                <h3>Rescue From Nostalgia - Durga Puja</h3>
                <img
                  // className={stylesAbout.aboutContentImg}
                  src="img/about-icon-6.png"
                  alt="First slide"
                />
                <p>
                  Durga Puja is the grandest cultural festival in Eastern India.
                  Bengalis look forward to the ten days throughout the year.
                  With virtual reality, we can revisit the experiences at any
                  time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={stylesAbout.aboutDurgaWrap}>
      <div className={stylesAbout.aboutDurgaBoxToolbox}>
      <img src="img/durga-puja-vr-tech.png" alt="First slide" fluid />

      </div>
        <div className={stylesAbout.aboutDurgaBox}>
          <div className={stylesAbout.aboutDurgaBoxHead}>
            <img src="img/icon-6.png" alt="First slide" fluid />
            <h2>Technologies used</h2>
            <img src="img/icon-7.png" alt="First slide" fluid />
          </div>

          <p>
            DurgaPujaVR recognizes technology as a boon and uses advanced
            techniques like 360 Virtual Tour Production, 8k VR Film Production,
            and Short Film Production with the help of our mother company
            SpaceShift. We use industry-standard equipment for production,
            softwares for post-production, artistic skills and talents ensuring
            that the quality of our content is highly professional.
          </p>
          <a className={stylesAbout.knowmoreBt}>Explore More</a>
        </div>
      </div>

      <div className={stylesAbout.overviewWrap}>
        <Container fluid>
          <Row>
            <Col>
              <div className={stylesAbout.advantagesTitle}>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/icon-1.png"
                  alt="First slide"
                />
                <h2>Overview</h2>
                <img
                  className={stylesAbout.aboutContentImg}
                  src="img/icon-2.png"
                  alt="First slide"
                />
              </div>

              <p>
                Durga Puja has gained recognition at the global level and holds
                prominent cultural significance. The beautiful festival awakens
                feelings of spirituality and divinity. Digital restoration helps
                preserve the purity and popularity the Puja holds, for future
                generations. The technology helps Durga Puja achieve greater
                heights and attracts the masses. Moreover, Virtual Visits are a
                good way to ensure that people stay home while maintaining the
                traditional ritual of pandal hopping virtually.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <MyApp Component={Footer} />
    </div>
  </>
);

export default About;
