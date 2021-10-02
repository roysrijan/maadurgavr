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
import { useState } from "react";

export default function index() {
  const [form, setForm] = useState({});

  const handleClick = () => {
    let mail = form['email'];
    let name = form['name'];
    let msg = form['msg'];
    let body = "<h4>mail: "+mail+"</h4><h4>name: "+name+"</h4><br />msg: "+msg;
    Email.send({
    Host : "mail.spaceshift.in",
    Username : "autogen@spaceshift.in",
    Password : "Autogen!2345",
    To : 'sunnydutta604@gmail.com',
    From : "autogen@spaceshift.in",
    Subject : "DurgaPujaVR | Contact Us",
    Body : body
}).then(
  message => {
    if(confirm("We have received your msg. We shall review shortly. Thank you")){
      setForm({
        name:'',
        email: '',
        msg: ''
      });
    }
  });
  }

  const handleChange = (event, value) => {
    form[value] = event.target.value;
    setForm(form);
  };

  return (
    <>
    <Head>
      <title>DurgaPujaVR | Get in touch</title>
      <meta property="og:description" content="We'd love to hear from you Whether you have a question about content, articles, information or anything else, our team is ready to answer all your questions." />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
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
        {/* <div className={stylesContact.contactBoxInner}>
          <h3>CONTACT</h3>
          <h1>Get in touch with us right away</h1>
          </div> */}
        </div>
        <div className={stylesContact.contactBox2}>
          <div className={stylesContact.contactForm}>
            <h3>Get in touch</h3>
            <Form>
              <Row className="mb-lg-3 mb-sm-3 mb-md-3">

              <Form.Group xs="12" lg="6" as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={form['name']} type="text" placeholder="Enter name"  className={stylesContact.inputStyle} onChange={e => handleChange(e, 'name')} />
                </Form.Group>
                <Form.Group xs="12" lg="6" as={Col} controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control value={form['email']} type="email" placeholder="Enter email" className={stylesContact.inputStyle} onChange={e => handleChange(e, 'email')} />
                </Form.Group>

                
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Message</Form.Label>
                <Form.Control value={form['msg']} as="textarea" rows={3} className={stylesContact.inputStyle} onChange={e => handleChange(e, 'msg')} />
              </Form.Group>

            
              <Button variant="primary" type="button" onClick={handleClick}>
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
