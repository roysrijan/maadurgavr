import MyApp from "../_app";
import TopNav from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import stylesShowcase from "../../styles/showcase.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <MyApp Component={TopNav} />
      <div className="pujaListContainer">
        <Container fluid>
          <Row>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h3>SB PARK THAKURPUKUR 2020</h3>
                <img
                  class="pujaListImg"
                  src="https://d298crf0xbd7xy.cloudfront.net/sb-park-durga-puja-2020/sb-park-durga-puja-2020.webp"
                  alt="First slide"
                ></img>
              </div>
            </Col>

            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h3>SB PARK THAKURPUKUR 2020</h3>
                <img
                  class="pujaListImg"
                  src="https://d298crf0xbd7xy.cloudfront.net/sb-park-durga-puja-2020/sb-park-durga-puja-2020.webp"
                  alt="First slide"
                ></img>
              </div>
            </Col>

            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h3>SB PARK THAKURPUKUR 2020</h3>
                <img
                  class="pujaListImg"
                  src="https://d298crf0xbd7xy.cloudfront.net/sb-park-durga-puja-2020/sb-park-durga-puja-2020.webp"
                  alt="First slide"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
