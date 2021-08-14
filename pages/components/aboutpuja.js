import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
export default function AboutPuja() {
  return (
    <>
      <div className={stylesHome.aboutDurgaWrap}>
        <div className={stylesHome.aboutDurgaBox}>
        <div className={stylesHome.aboutDurgaBoxHead}>
        <img src="img/icon-6.png" alt="First slide" fluid />
        <h2>ABOUT Durga Puja</h2>
        <img src="img/icon-7.png" alt="First slide" fluid />
        </div>
          
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,{" "}
          </p>
          <a className={stylesHome.knowmoreBt}>Explore More</a>
        </div>
      </div>
    </>
  );
}
