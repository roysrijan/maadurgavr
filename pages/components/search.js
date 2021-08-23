import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Form } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Search() {
  const [years, setYears] = useState([]);
  useEffect(async ()=>{
    if(years.length==0){
      let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-distinct-years");
      let data = await res.json();
      setYears(data.years);
      }
  })
  return (
    <>
      <div className={stylesHome.searchWrap}>
        <img
          className={stylesHome.searchImg}
          src="img/search-icon.png"
          alt="First slide"
        />
        <div className={stylesHome.formWrap}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control
                className={stylesHome.inputStyle}
                type="email"
                placeholder="Search your favourite Pandal here"
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
          </Form>
        </div>

        <div className={stylesHome.chooseYear}>
          <Form.Select aria-label="Default select example" className={stylesHome.chooseYearSelect}>
            {/* <option>Choose year</option> */}
            {/* <option value="1">2021</option> */}
            {years.map((item)=>(
            <option value="1">{item}</option>
            ))}
            {/* <option value="2">2019</option>
            <option value="3">2018</option> */}
          </Form.Select>
        </div>
        <button className={stylesHome.searchBt}>Search</button>
      </div>
    </>
  );
}
