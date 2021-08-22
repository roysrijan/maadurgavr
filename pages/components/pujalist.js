import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PujaList() {
  const [items, setItems] = useState([]);
  let [count, setCount] = useState(0);
  useEffect(async ()=>{
    if(items.length==0){
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data");
    let data = await res.json();
    setItems(data.items);
    }
  })
  return (
    <>
      <div className={stylesHome.pujaListContainer}>
        <Container fluid>
        {items
          .map((item, index) => (
          <Row>
            { count < items.length - 1 && (
            <>
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>{items[count].homeTitle}</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src={items[count].homeImg}
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */}

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            <Col xs={12}  lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>{items[count+1].homeTitle}</h2>
                <a href="/tours">
                <img
                  className={stylesHome.pujaListImg}
                  src={items[count+1].homeImg}
                  alt="First slide"
                  fluid
                />
                </a>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */
                count+=2
                }

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            </>
            )}
          </Row>
          ))}
          </Container>
      </div>
    </>
  );
}
