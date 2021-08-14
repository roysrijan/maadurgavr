import MyApp from "../_app";
import CountDown from "./countdown";
import Footer from "./footer";
import TopNav from "./navbar";
import Carousel from 'react-bootstrap/Carousel'
export default function HomeBanner() {
  return (
    <>
    <MyApp Component={TopNav} />
      <Carousel fade controls="false" interval="100" touch="true" indicators="false">
        <Carousel.Item>
          <img
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
          <img
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
          <img
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
      
     
      <MyApp Component={CountDown} />
    </>
  );
}
