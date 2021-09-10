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
      <div className={stylesHome.carouselWrap}>
        <Carousel fade controls="false" interval="500" touch="true" indicators="false">
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src="img/durgapujavr-interactive-virtual-tours.webp"
              src="img/Banner_resised-desktop.webp"
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        
        </Carousel>
        <h1>The best way to Experience Durga Puja Pandals Online</h1>
      </div>

      <div className={stylesHome.carouselWrapForMobile}>
        <Carousel fade controls="false" interval="2000" touch="true" indicators="false">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/durgapujavr-home-cover-mobile.webp"
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
         
        </Carousel>
        <h1>The best way to Experience Durga Puja Pandals Online</h1>
        {/* <h2>Lorem Ipsum is a dummy text</h2> */}
      </div>
      <MyApp Component={CountDown} />
    </>
  );
}
