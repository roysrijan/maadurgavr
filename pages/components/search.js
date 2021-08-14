import MyApp from "../_app";
import Footer from "./footer";
import TopNav from "./navbar";
import { Form } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
export default function Search() {
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
        <button className={stylesHome.searchBt}>Search</button>
      </div>
    </>
  );
}
