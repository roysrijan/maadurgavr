import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Countdown from 'react-countdown';

export default function CountDown() {
    return (
      <>
       <div className={stylesHome.countDownTimerWrap}>
         <h2>2021 Durga Puja Content  to go live</h2>
         <Countdown date={new Date('10/11/2021')} />
       </div>
       </>
    )}

