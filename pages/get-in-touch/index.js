import Head from "next/head";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesContact from "../../styles/contact.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function index() {
  return (
    <>
    <Head>
      <title>Get in touch | DurgaPujaVR</title>
      <meta property="og:description" content="We'd love to hear from you Whether you have a question about content, articles, information or anything else, our team is ready to answer all your questions." />
    </Head>
    <div className={stylesContact.bodyContent}>
      <MyApp Component={TopNav} />
      {/* <div className={stylesContact.aboutBanner}>
        <img
          className={stylesContact.searchImg}
          src="img/about-us-banner-new.jpg"
          alt="First slide"
        />
      </div>
      <div className={stylesContact.aboutBannerForMobile}>
        <img
          className={stylesContact.searchImg}
          src="img/durga-v.png"
          alt="First slide"
        />
      </div> */}

      <div className={stylesContact.contactMainWrapper}>
        <div className={stylesContact.contactBox1}>
        <div className={stylesContact.contactBoxInner}>
          <h3>CONTACT</h3>
          <h1>Get in touch with us right away</h1>
          </div>
        </div>
        <div className={stylesContact.contactBox2}>
          <div className={stylesContact.contactForm}>
            <h3>Get in touch</h3>
            <Form>
              <Row className="mb-lg-3 mb-sm-3 mb-md-3">

              <Form.Group xs="12" lg="6" as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name"  className={stylesContact.inputStyle} />
                </Form.Group>
                <Form.Group xs="12" lg="6" as={Col} controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className={stylesContact.inputStyle}/>
                </Form.Group>

                
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} className={stylesContact.inputStyle} />
              </Form.Group>

            
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <MyApp Component={Footer} />
    </div>
    </>
  );
}
