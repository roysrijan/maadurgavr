import MyApp from "../_app";
import AboutPuja from "./aboutpuja";
import AboutUs from "./aboutus";
import PujaList from "./pujalist";
import Search from "./search";
import { Container } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";


export default function HomeContent() {
  return (
    <>
     
        <div className="durga-puja-list-wrapper">
          <div className={stylesHome.headTitleWrap}>
            <img
              className={stylesHome.trisool}
              src="img/icon-3.png"
              alt="First slide"
            />
            <h1 className={stylesHome.headTitle}>
              Durgapuja 2020 virtual Tour
            </h1>
            <img
              className={stylesHome.trisool}
              src="img/icon-4.png"
              alt="First slide"
            />
          </div>
          <div className={stylesHome.searchWrapMain}>
            <MyApp Component={Search} />
          </div>
          <MyApp Component={PujaList} />
        </div>
        <MyApp Component={AboutUs} />
        <MyApp Component={AboutPuja} />
      
    </>
  );
}
