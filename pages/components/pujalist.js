import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PujaList({year}) {
  const [items, setItems] = useState([]);
  let [count, setCount] = useState(0);
  const [currentYear, setCurrentYear] = useState();
  useEffect(async ()=>{
    if(items.length==0 || currentYear!=year){
      let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data?year="+year);
      let data = await res.json();
      setItems(data.items);
      setCurrentYear(year);
    }
  });
  return (
    <>
      <div className={stylesHome.pujaListContainer}>
        <Container fluid>
        {items
          .sort((a, b) => a.sequence - b.sequence)
          .map((item, index) => (
          <Row>
            { count < items.length && (
            <Col xs={12} lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>{items[count].homeTitle}</h2>
                <Link
                  href={items[count].clubPageName}
                >
                <img
                  className={stylesHome.pujaListImg}
                  src={items[count].homeImg}
                  alt="First slide"
                  fluid
                />
                </Link>
                <div hidden>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */
                count+=1
                }
                </div>

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            )}
            { count < items.length && (
            <Col xs={12}  lg={6} md={6}>
              <div className={stylesHome.pujaListBox}>
                <h2>{items[count].homeTitle}</h2>
                <Link
                  href={items[count].clubPageName}
                >
                <img
                  className={stylesHome.pujaListImg}
                  src={items[count].homeImg}
                  alt="First slide"
                  fluid
                />
                </Link>
                <div hidden>
                {/* <a className={stylesHome.three60Bt} href="">
                  <img src="img/360-icon.jpg" alt="First slide" fluid />
                </a> */
                count+=1
                }
                </div>

                <a className={stylesHome.shareBt} href="">
                  <img src="img/share-icon.png" alt="First slide" fluid />
                </a>
              </div>
            </Col>
            )}
          </Row>
          ))}
          </Container>
      </div>
    </>
  );
}
