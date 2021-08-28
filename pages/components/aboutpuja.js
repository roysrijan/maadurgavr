import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function AboutPuja() {
  return (
    <>
      
      <div className={stylesHome.aboutDurgaWrap}>
        <div className={stylesHome.aboutDurgaBox}>
          <div className={stylesHome.aboutDurgaBoxHead}>
            <img src="img/flower-1.png" alt="First slide" fluid />
            <h2>ABOUT Durga Puja</h2>
            <img src="img/flower-2.png" alt="First slide" fluid />
          </div>

          <p>
            Durga Puja or ‘Sharadotsav’ is an annual Hindu festival revered by
            Hindu mythology, paying homage to the Hindu Goddess, Durga. The
            festival is significant and traditionally celebrated in West Bengal.
            Maa Durga is the Goddess of Power, and Durga Puja signifies the
            triumph of good over evil.
          </p>
          <a className={stylesHome.knowmoreBt}>Explore More</a>
        </div>
      </div>
    </>
  );
}
