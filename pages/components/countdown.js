import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import Countdown from 'react-countdown'

export default function CountDown() {
    return (
      <>
        <Countdown date={new Date('10/11/2021')} />
      </>
    )
}