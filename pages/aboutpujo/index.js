import Head from "next/head";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesAboutPuja from "../../styles/aboutpuja.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function index() {
  return (
    <div  className={stylesAboutPuja.bodyContent}>
      <MyApp Component={TopNav} />

      <div className={stylesAboutPuja.aboutBanner}>
        <img
          className={stylesAboutPuja.searchImg}
          src="img/about-pujo.jpg"
          alt="First slide"
        />
      </div>

      <div className={stylesAboutPuja.aboutBannerForMobile}>
                <img
                  className={stylesAboutPuja.searchImg}
                  src="img/durga-v.png"
                  alt="First slide"
                />
           
              </div>

      <div className={stylesAboutPuja.pandalHopping}>
        <Container fluid>
          <Row className={stylesAboutPuja.aboutContentContainerNew}>
            <Col lg="6" md="6">
              <div className={stylesAboutPuja.aboutContentImgWRap}>
                <img
                  className={stylesAboutPuja.aboutContentImg}
                  src="img/durga-img-1.jpg"
                  alt="First slide"
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={stylesAboutPuja.aboutContentLeftCol}>
                <h2>What is Durga Puja?</h2>
                <p>
                  Durga Puja or ‘Sharadotsav’ is an annual Hindu festival
                  revered by Hindu mythology, paying homage to the Hindu
                  Goddess, Durga. The festival is significant and traditionally
                  celebrated in West Bengal. Maa Durga is the Goddess of Power,
                  and Durga Puja signifies the triumph of good over evil. Durga
                  Puja is a significant part of Hindu mythology and has been
                  mentioned frequently in its scriptures. The Bengalis look
                  forward to this significant socio-cultural festival throughout
                  the year, for an unparalleled cultural experience in Kolkata,
                  every year. The sound coming from the dhak mixed with the
                  fragrance of the seasonal flowers fills the streets and
                  corners of Kolkata. However, the massive grandeur of Durga
                  Puja is not restricted to being just a ten-day festival. The
                  Pujo houses itself in the hearts of the devotees long after
                  the festival is wrapped.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={stylesAboutPuja.mythoBg}>
        <div className={stylesAboutPuja.overviewWrap}>
          <Container fluid>
            <Row>
              <Col>
                <div className={stylesAboutPuja.advantagesTitle}>
                  <img
                    className={stylesAboutPuja.aboutContentImg}
                    src="img/icon-1.png"
                    alt="First slide"
                  />
                  <h2>Mythological Significance of Durga Puja</h2>
                  <img
                    className={stylesAboutPuja.aboutContentImg}
                    src="img/icon-2.png"
                    alt="First slide"
                  />
                </div>

                <p>
                  According to sacred Hindu texts, Mahishasura (a shape-shifting
                  demon) was troubled by the defeat of Asuras by the Devas in
                  every fight. He decided to please the Gods and spent years in
                  penance. Lord Brahma was pleased with Mahishasura’s devotion
                  and appeared before him. Mahishasura asked Brahma to bless him
                  such that neither a man nor a Deva could kill him. Hence,
                  Mahishasura’s death was only possible at the hands of a woman.{" "}
                  <br></br>
                  <br></br>
                  As this boon was granted, Mahishasura invaded Earth with his
                  army of demons. He planned to gain control of the three realms
                  since he was practically invulnerable. Mahishasura defeated
                  the army of Devas. Frustrated and angry at their defeat, the
                  Devas asked the Tridevas (Brahma, Vishnu, and Shiva
                  responsible for the creation, maintenance, and destruction of
                  the universe) for a solution. <br></br>
                  <br></br>
                  The Tridevas used their powers to create energy, that took the
                  form of the Goddess Durga. Each of the Devas gave her a weapon
                  to fight and kill Mahishasura. The demon laughed at the
                  thought of fighting a woman, but as the battle proceeded he
                  lost. When he changed into a buffalo, Goddess Durga beheaded
                  him. This scene is replicated in many Durga Puja Art
                  Installations. The nine days of the Durga Puja mark her stay
                  in her paternal home on Earth with her four children, before
                  reuniting with her husband Shiva on the tenth day, known as
                  Vijayadashami.
                  <br></br>
                  <br></br>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={stylesAboutPuja.traditionalWrap}>
        <div className={stylesAboutPuja.aboutContent}>
          <Container fluid>
            <Row>
              <Col lg="12">
                <div className={stylesAboutPuja.aboutTitleWrap}>
                  <h2>What Traditional Celebrations Entail?</h2>
                </div>
              </Col>
              </Row>
              <Row className={stylesAboutPuja.aboutContentContainer}>
                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentLeftCol}>
                    {/* <h2>Salt Lake AE Block 2021</h2> */}
                    <p>
                      Durga Puja is a significant festival for Bengalis and is
                      widely celebrated all over Bengal. The puja is often
                      performed at home and in public. The latter feature
                      temporary stages and decorations, known as ‘pandals.’ The
                      pandals are built in community squares and open spaces.
                      The literary scripts mention that the zamindars
                      (landlords) and rajas celebrated Durga Puja for the whole
                      village. The Bonedi Bari Pujo (Durga Puja in the house of
                      the zamindars) is a custom that is still carried on. These
                      Pujas are open to the public, who can come and take part
                      in the grand festivities.
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentImgWRapr}>
                    <img
                      className={stylesAboutPuja.aboutContentImg}
                      src="img/img-3.jpg"
                      alt="First slide"
                    />
                  </div>
                </Col>
              </Row>
              
              <Row className={stylesAboutPuja["aboutContentContainer"] + " " + stylesAboutPuja["aboutContentContainerForMobile"]}>
                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentImgWRap}>
                    <img
                      className={stylesAboutPuja.aboutContentImg}
                      src="img/durga-puja-vr-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentRightCol}>
                    {/* <h2>Salt Lake AE Block 2021</h2> */}
                    <p>
                      Some of the Kolkata Durga Puja Pandals are breathtaking
                      art installations and attract mass visitors. Scripture
                      recitations, various art performances, exchange of gifts,
                      family visits, and mass gatherings are a part of the Durga
                      Puja celebrations. Durga Puja is a socio-cultural event in
                      the eastern and northeastern states. The chanting of the
                      shlokas and mantras in the pandals feel divine. Most of
                      the pandals feature a Durga Puja Art Installation created
                      by skilled artisans. The complete process of creating the
                      clay sculptures, known as ‘pratima’ or ‘murti,’ is
                      ceremonial and begins months before the festival. The
                      local artisans paint the idols, later decorated,
                      bejeweled, and displayed in Kolkata Durga Puja Pandals.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className={stylesAboutPuja.aboutContentContainer}>
                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentLeftCol}>
                    {/* <h2>Salt Lake AE Block 2021</h2> */}
                    <p>
                      The pandal creation and art installation start months
                      before the actual days of Durga Puja. The Durga Puja Theme
                      Pandals attract huge crowds of visitors. These Durga Puja
                      Theme Pandals rose to prominence in recent years and have
                      included a range of topics. Every artist tries to come up
                      with new and interesting themes every year, to attract the
                      masses.
                    </p>
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div className={stylesAboutPuja.aboutContentImgWRapr}>
                    <img
                      className={stylesAboutPuja.aboutContentImg}
                      src="img/img-3.jpg"
                      alt="First slide"
                    />
                  </div>
                </Col>
              </Row>
          
          </Container>
        </div>
      </div>
      <div className={stylesAboutPuja.imgWrapper}>
        <img
          className={stylesAboutPuja.aboutContentImg}
          src="img/durga-img-5.jpg"
          alt="First slide"
        />
      </div>

      <div className={stylesAboutPuja.overviewWrap}>
        <Container fluid>
          <Row>
            <Col>
              <div className={stylesAboutPuja.advantagesTitle}>
                <img
                  className={stylesAboutPuja.aboutContentImg}
                  src="img/dancing-icon.png"
                  alt="First slide"
                />
                <h2>Keeping the Spirit of Durga Puja Alive </h2>
                <img
                  className={stylesAboutPuja.aboutContentImg}
                  src="img/dancing-icon2.png"
                  alt="First slide"
                />
              </div>

              <p>
                The risks of the COVID-19 pandemic worried the masses, and the
                government imposed various restrictions for their safety. Durga
                Puja in 2020 was a low-key affair and missed the usual
                excitement. Restrictions were imposed on the physical darshan of
                the Durga Puja Art Installations in the form of pandals. States
                issued COVID-19 guidelines for community members, organizers,
                and devotees for their safety. People missed the familiar sound
                of Dhaks, the fragrance of seasonal flowers, pandal hopping, and
                get-togethers. People are searching for ways to retain some of
                the Durga Puja feelings. Well, MAADURGAVR is here to help you
                preserve the excitement of pandal hopping from the safety and
                comfort of your home. Get ready for 3D virtual tours of the
                famous Durga Puja pandals that you can interact with to
                experience a close to real-life visit. Enjoy the auspicious
                occasion on MaaDurgaVR with a virtual visit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <MyApp Component={Footer} />
    </div>
  );
}
