import MyApp from "../_app";
import AboutPuja from "./aboutpuja";
import AboutUs from "./aboutus";
import PujaList from "./pujalist";
import Search from "./search";
import { Container } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import TopNav from "./navbar";


export default function HomeContent() {
  const [year, setYear] = useState('2020');
  return (
    <>
     <TopNav setYear={setYear} />
     <div  className={stylesHome.bodyContent}>
        <div className="durga-puja-list-wrapper">
          <div className={stylesHome.headTitleWrap}>
            <img
              className={stylesHome.trisool}
              src="img/icon-3.png"
              alt="First slide"
            />
            <h1 className={stylesHome.headTitle}>
            2021 DURGA PUJA SHOWCASE
            </h1>
            <img
              className={stylesHome.trisool}
              src="img/icon-4.png"
              alt="First slide"
            />
          </div>
          <div className={stylesHome.searchWrapMain}>
            <Search year={year} setYear={setYear} />
          </div>
          <PujaList year={year} />
        </div>
        <MyApp Component={AboutUs} />
        <MyApp Component={AboutPuja} />
        </div>
    </>
  );
}
