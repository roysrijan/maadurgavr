import MyApp from "../_app";
import CountDown from "./countdown";
import Footer from "./footer";
import TopNav from "./navbar";
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <>
      <MyApp Component={TopNav} />
      <div className={stylesHome.carouselWrap}>
        <Carousel fade controls="false" interval="100" touch="true" indicators="false">
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="img/banner.png"
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="img/banner2.png"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="img/banner3.png"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <h2>Lorem Ipsum is a dummy text</h2>
      </div>
      <MyApp Component={CountDown} />
    </>
  );
}
