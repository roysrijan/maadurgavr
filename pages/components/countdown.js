import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";

export default function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("10/11/2021").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        days < 10 ? setTimerDays("0" + days) : setTimerDays(days);
        hours < 10 ? setTimerHours("0" + hours) : setTimerHours(hours);
        minutes < 10
          ? setTimerMinutes("0" + minutes)
          : setTimerMinutes(minutes);
        seconds < 10
          ? setTimerSeconds("0" + seconds)
          : setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className={stylesHome.countDownTimerWrap}>
        <div className={stylesHome.countDownTimerBgIcon1}>
          <img
            className={stylesHome.searchImg}
            src="img/icon-1.png"
            alt="First slide"
          />
        </div>
        <h2>2021 Durga Puja Content to go live</h2>
        <div className={stylesHome.countDownWrap}>
          <section className={stylesHome.countDownBox}>
            <div className={stylesHome.countDownBoxInner}>
              <h3>{timerDays}</h3>
              <p>
                <small>Days</small>{" "}
              </p>
            </div>

            <span>:</span>
          </section>
          <section className={stylesHome.countDownBox}>
            <div className={stylesHome.countDownBoxInner}>
              <h3>{timerHours}</h3>
              <p>
                <small>Hours</small>
              </p>
            </div>
            <span>:</span>
          </section>
          <section className={stylesHome.countDownBox}>
          <div className={stylesHome.countDownBoxInner}>
          <h3>
              {timerMinutes}
              
            </h3>
            <p>
              <small>Minutes</small>
            </p>
          </div>
          <span>:</span>
           
          </section>
          <section className={stylesHome.countDownBox}>
          <div className={stylesHome.countDownBoxInner}>
          <h3>{timerSeconds}</h3>
            <p>
              <small>Seconds</small>
            </p>
          </div>
          <span className={stylesHome.countDownBoxInnerLastDot} style={{opacity:0}}>:</span>
          </section>
        </div>
        <div className={stylesHome.countDownTimerBgIcon2}>
          <img
            className={stylesHome.searchImg}
            src="img/icon-2.png"
            alt="First slide"
          />
        </div>
      </div>
    </>
  );
}
