import Head from 'next/head'
import TopNav from '../components/navbar';
import MyApp from '../_app';
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const About = () => (
    <>
      <div>
        <Head>About Us</Head>
        <MyApp Component={TopNav} />
        <h2>A place for playing with Next JS! :D</h2>
      </div>
    </>
  );
  
  export default About;