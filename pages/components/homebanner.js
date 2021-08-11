import MyApp from "../_app";
import CountDown from "./countdown";
import Footer from "./footer";
import TopNav from "./navbar";

export default function HomeBanner() {
    return (
      <>
        <MyApp Component={TopNav} />
        Image...
        <MyApp Component={CountDown} />
      </>
    )
}