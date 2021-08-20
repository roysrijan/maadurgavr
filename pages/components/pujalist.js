import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function PujaList() {
  return (
    <>
      <div className={stylesHome.pujaListContainer}>
        <Container fluid>
          <Row>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TBNL_01.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            <Col xs={12}  lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TBNL_02.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
          <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_03.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_04.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
          <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_05.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_06.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
          </Row>

          <Row>
          <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_07.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>Salt Lake AE Block 2021</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src="img/thumb/TMBNL_08.png"
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
